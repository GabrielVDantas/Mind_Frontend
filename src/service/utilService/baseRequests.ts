import baseUrl from "./baseUrlService";

class BaseRequests {
  static async basePostRequest(
    endPoint: string,
    formData: Record<string, unknown> | FormData,
    header?: {},
  ) {
    try {
      return await baseUrl.post(`${endPoint}`, formData, header || {});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async baseGetRequest(endPoint: string, header: {}) {
    try {
      return await baseUrl.get(`${endPoint}`, header);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async basePutRequest(
    endPoint: string,
    formData: Record<string, unknown> | FormData,
    header: {}
  ) {
    try {
      return await baseUrl.put(`${endPoint}`, formData, header);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async baseDeleteRequest(endPoint: string, header: {}) {
    try {
      return await baseUrl.delete(`${endPoint}`, header);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default BaseRequests;
