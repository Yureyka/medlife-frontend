import { instance, PaginationResponse } from "./axiosInstance";
import { AppointmentPayload, IAppointment } from "interfaces";

export class AppointmentApi {
  static getAppointmentRequests(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<IAppointment[]>> {
    return instance.get(
      `/call-requests?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static deleteAppointmentRequest(id: string) {
    return instance.delete(`/call-requests/delete/${id}`);
  }

  static createAppointmentRequest(
    options: AppointmentPayload
  ): Promise<IAppointment> {
    return instance.post(`/call-requests/create`, options);
  }

  static updateAppointmentRequest(
    options: AppointmentPayload
  ): Promise<IAppointment> {
    return instance.put(`/call-requests/update/${options._id}`, options);
  }
}
