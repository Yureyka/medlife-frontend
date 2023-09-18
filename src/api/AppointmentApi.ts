import { instance, PaginationResponse } from "./axiosInstance";
import { AppointmentPayload, IAppointment } from "interfaces";

export class AppointmentApi {
  static getAppointmentRequests(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<IAppointment[]>> {
    return instance.get(
      `/api/appointments?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static deleteAppointmentRequest(id: string) {
    return instance.delete(`/api/appointments/delete/${id}`);
  }

  static createAppointmentRequest(
    options: AppointmentPayload
  ): Promise<IAppointment> {
    return instance.post(`/api/appointments/create`, options);
  }

  static updateAppointmentRequest(
    options: AppointmentPayload
  ): Promise<IAppointment> {
    return instance.put(`/api/appointments/update/${options._id}`, options);
  }
}
