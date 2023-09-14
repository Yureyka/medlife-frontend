import { instance, PaginationResponse } from "./axiosInstance";
import { CallRequestPayload, ICallRequest } from "interfaces";

export class CallRequestApi {
  static getCallRequests(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<ICallRequest[]>> {
    return instance.get(
      `/call-requests?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static deleteCallRequest(id: string) {
    return instance.delete(`/call-requests/delete/${id}`);
  }

  static createCallRequest(options: CallRequestPayload): Promise<ICallRequest> {
    return instance.post(`/call-requests/create`, options);
  }

  static updateCallRequest(options: CallRequestPayload): Promise<ICallRequest> {
    return instance.put(`/call-requests/update/${options._id}`, options);
  }
}
