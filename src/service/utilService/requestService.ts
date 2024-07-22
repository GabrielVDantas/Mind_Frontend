import TokenService from "./tokenService";

class RequestService {
  static async generateRequestHeader(isFileHeader: boolean) {
    const token = TokenService.getToken();
    let headers = {};
    if (isFileHeader) {
      headers = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "form-data",
        },
      };
    } else {
      headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }    
    return headers;
  }

  static async generateFormData(isFileHeader: boolean, keys: string[], data: Record<string, unknown>) {
    if (isFileHeader) {
      const formData = new FormData();
      keys.forEach((key) => {
        if (data[key]) {
          if (typeof data[key] === 'string') {
            formData.append(key, data[key] as string);
          } else if (data[key] instanceof Blob) {
            formData.append(key, data[key] as Blob);
          }
        }
      })      
      return formData;
    } else {
      const formData: Record<string, unknown> = {};
      keys.forEach((key) => {
        if (data[key]) {
          formData[key] = data[key];
        }
      });
      console.log(formData);
      return formData;
    }
  }
}

export default RequestService;
