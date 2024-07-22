import BaseRequests from "../utilService/baseRequests";
import RequestService from "../utilService/requestService";

class TransactionRequests {
  static async getFeedTransactionsRequest() {
    const header = await RequestService.generateRequestHeader(false);
    return await BaseRequests.baseGetRequest("/feed", header);
  }

  static async newTransactionRequest(data: Record<string, unknown>) {
    const keys = ["amount", "description"];
    const formData = await RequestService.generateFormData(false, keys, data);
    const header = await RequestService.generateRequestHeader(true)
    return await BaseRequests.basePostRequest("/new", formData, header);
  }
}

export default TransactionRequests;
