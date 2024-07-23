import BaseRequests from "../utilService/baseRequests";
import PasswordService from "../utilService/passwordService";
import RequestService from "../utilService/requestService";

class TransactionRequests {
  static async getFeedTransactionsRequest() {
    const header = await RequestService.generateRequestHeader(false);        
    return await BaseRequests.baseGetRequest("/feed", header);
  }

  static async newTransactionRequest(data: Record<string, unknown>) {
    const keys = ["amount", "description"];
    const formData = await RequestService.generateFormData(false, keys, data);
    const header = await RequestService.generateRequestHeader(false)
    return await BaseRequests.basePostRequest("/new-transaction", formData, header);
  }

  static async updateTransactionRequest(data: Record<string, unknown>, transactionId: number) {
    const keys = ["amount", "description"];
    const formData = await RequestService.generateFormData(false, keys, data);
    const header = await RequestService.generateRequestHeader(false);
    return await BaseRequests.basePutRequest(`/update-transaction/${transactionId}`, formData, header);
  }

  static async deleteTransactionRequest(data: Record<string, string>, transactionId: number) {
    await PasswordService.compareKeyword(data.keyword);
    const header = await RequestService.generateRequestHeader(false);
    return await BaseRequests.baseDeleteRequest(`/delete-transaction/${transactionId}`, header);
  }
}

export default TransactionRequests;
