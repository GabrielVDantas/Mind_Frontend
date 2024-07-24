class TokenService {
  static setToken(token: string) {
    localStorage.setItem("ACCESS_TOKEN_KEY", token);
  }

  static getToken() {
    return localStorage.getItem("ACCESS_TOKEN_KEY");
  }

  // static removeToken() {
  //   localStorage.removeItem("ACCESS_TOKEN_KEY");
  // }
}

export default TokenService;
