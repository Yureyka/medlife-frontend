import { AxiosRequestConfig } from "axios";
import { instance, PaginationResponse } from "./axiosInstance";
import { IService, IServiceGroup, ServicePayload } from "interfaces";

export class ServicesApi {
  static getGroupsWithServices(): Promise<IServiceGroup[]> {
    return instance.get("/service-groups-all");
  }

  static getGroups(): Promise<IServiceGroup[]> {
    return instance.get("/service-groups");
  }

  static getServices(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<IService[]>> {
    return instance.get(`/services?pageSize=${pageSize}&page=${page}&filter=${filter}`);
  }

  static getServicesTable(options: AxiosRequestConfig): Promise<BlobPart> {
    return instance.get("/service-groups/table", options);
  }

  static deleteService(id: string) {
    return instance.delete(`/services/delete/${id}`);
  }

  static updateService(options: ServicePayload): Promise<IService> {
    return instance.put(`/services/update/${options._id}`, options);
  }

  static createService(options: ServicePayload): Promise<IService> {
    return instance.post(`/services/create`, options);
  }
}
