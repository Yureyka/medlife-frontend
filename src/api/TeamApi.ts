import { instance, PaginationResponse } from "./axiosInstance";
import { DoctorPayload, IDoctor } from "interfaces";

export class TeamApi {
  static getTeam(): Promise<IDoctor[]> {
    return instance.get(`/doctors/showAll`);
  }

  static getPaginatedTeam(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<IDoctor[]>> {
    return instance.get(
      `/doctors?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static getDoctorInfo(id: string): Promise<IDoctor> {
    return instance.get(`/doctors/${id}`);
  }

  static deleteDoctor(id: string) {
    return instance.delete(`/doctors/delete/${id}`);
  }

  static updateDoctor(options: DoctorPayload): Promise<IDoctor> {
    return instance.put(`/doctors/update/${options._id}`, options, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  static createDoctor(options: DoctorPayload): Promise<IDoctor> {
    return instance.post(`/doctors/create`, options, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
}
