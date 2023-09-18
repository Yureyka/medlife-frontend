import { instance, PaginationResponse } from "./axiosInstance";
import { CallRequestPayload, ICallRequest } from "interfaces";

export class CallRequestApi {
  static getCallRequests(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<ICallRequest[]>> {
    return instance.get(
      `/api/call-requests?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static deleteCallRequest(id: string) {
    return instance.delete(`/api/call-requests/delete/${id}`);
  }

  static createCallRequest(options: CallRequestPayload): Promise<ICallRequest> {
    return instance.post(`/api/call-requests/create`, options);
  }

  static updateCallRequest(options: CallRequestPayload): Promise<ICallRequest> {
    return instance.put(`/api/call-requests/update/${options._id}`, options);
  }
}
