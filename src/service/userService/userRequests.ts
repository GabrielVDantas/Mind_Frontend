import BaseRequests from "../utilService/baseRequests";
import PasswordService from "../utilService/passwordService";
import RequestService from "../utilService/requestService";
import TokenService from "../utilService/tokenService";

class UserRequests {
  static async registerRequest(data: Record<string, unknown>) {
    try {
      const keys = ["username", "email", "password", "avatar"];
      const formData = await RequestService.generateFormData(true, keys, data);
      return await BaseRequests.basePostRequest("/register", formData);
    } catch (error) {
      console.error("Algo deu errado, registro não permitido!");
    }
  }

  static async loginRequest(data: Record<string, string>) {
    try {
      const keys = ["email", "password"];
      const formData = await RequestService.generateFormData(false, keys, data);
      const response = await BaseRequests.basePostRequest("/login", formData);
      response.data.user.token &&
        TokenService.setToken(response.data.user.token);
      return response;
    } catch (error) {
      console.error("Algo deu errado, login não permitido!");
    }
  }

  static async getUserRequest() {
    try {
      const header = await RequestService.generateRequestHeader(false);
      return await BaseRequests.baseGetRequest("/profile", header);
    } catch (error) {
      console.error("Algo deu errado, envio de dados não permitido!");
    }
  }

  static async updateUserRequest(data: Record<string, string>, about: string) {
    const keys = [`${about}`];
    about === "password" &&
      (await PasswordService.comparePassword(
        data.password,
        data.confirmPassword
      ));
    const formData = await RequestService.generateFormData(false, keys, data);
    const header = await RequestService.generateRequestHeader(false);
    return await BaseRequests.basePutRequest(
      `/update-${about}`,
      formData,
      header
    );
  }

  static async deleteUserRequest(data: Record<string, string>) {
    await PasswordService.compareKeyword(data.keyword);
    const header = await RequestService.generateRequestHeader(false);
    const response = await BaseRequests.baseDeleteRequest("/delete", header);
    TokenService.removeToken();
    return response;
  }
}

export default UserRequests;
