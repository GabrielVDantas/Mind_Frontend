import BaseRequests from "../utilService/baseRequests";
import PasswordService from "../utilService/passwordService";
import RequestService from "../utilService/requestService";

class TransactionRequests {
  static async getFeedTransactionsRequest() {
    try {
      const header = await RequestService.generateRequestHeader(false);            
      return await BaseRequests.baseGetRequest("/feed", header);
    } catch (error) {
      console.error("Algo deu errado, envio de transações não permitido!");
    }
  }

  static async newTransactionRequest(data: Record<string, unknown>) {
    try {
      const keys = ["amount", "description", "category", "type"];
      const formData = await RequestService.generateFormData(false, keys, data);
      const header = await RequestService.generateRequestHeader(false);
      return await BaseRequests.basePostRequest(
        "/new-transaction",
        formData,
        header
      );
    } catch (error) {
      console.error("Algo deu errado, criação de transação não permitida!");
    }
  }

  static async updateTransactionRequest(
    data: Record<string, unknown>,
    transactionId: number
  ) {
    try {
      const keys = ["amount", "description", "category", "type"];      
      const formData = await RequestService.generateFormData(false, keys, data);
      const header = await RequestService.generateRequestHeader(false);      
      return await BaseRequests.basePutRequest(
        `/update-transaction/${transactionId}`,
        formData,
        header
      );
    } catch (error) {
      console.error("Algo deu errado, atualização de transação não permitido!");
    }
  }

  static async deleteTransactionRequest(
    data: Record<string, string>,
    transactionId: number
  ) {
    try {
      await PasswordService.compareKeyword(data.keyword);
      const header = await RequestService.generateRequestHeader(false);
      return await BaseRequests.baseDeleteRequest(
        `/delete-transaction/${transactionId}`,
        header
      );
    } catch (error) {
      console.error("Algo deu errado, remoção de transação não permitido!");
    }
  }
}

export default TransactionRequests;
