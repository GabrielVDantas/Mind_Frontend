class PasswordService {
  static async comparePassword(password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      throw new Error("As senhas não batem");
    }
  }

  static async compareKeyword(keyword: string) {
    if (!keyword.match("CONFIRMAR")) {
      throw new Error("'CONFIRMAR' foi digitado incorretamente")
    }
  }
}

export default PasswordService;
