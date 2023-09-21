import { AxiosRequestConfig } from "axios";
import { instance, PaginationResponse } from "./axiosInstance";
import { IService, IServiceGroup, ServiceGroupPayload, ServicePayload } from "interfaces";

export class ServicesApi {
  static getGroupsWithServices(): Promise<IServiceGroup[]> {
    return instance.get("/api/service-groups-all");
  }

  static getGroups(): Promise<IServiceGroup[]> {
    return instance.get("/api/service-groups");
  }

  static getGroupsPaginated(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<IServiceGroup[]>> {
    return instance.get(
      `/api/services-groups-paginated?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static getServices(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<IService[]>> {
    return instance.get(
      `/api/services?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static getGroupWithServices(key: string): Promise<IServiceGroup> {
    return instance.get(`/api/service-groups/${key}`);
  }

  static getServicesTable(options: AxiosRequestConfig): Promise<BlobPart> {
    return instance.get("/api/service-groups/table", options);
  }

  static deleteService(id: string) {
    return instance.delete(`/api/services/delete/${id}`);
  }

  static updateService(options: ServicePayload): Promise<IService> {
    return instance.put(`/api/services/update/${options._id}`, options);
  }

  static createService(options: ServiceGroupPayload): Promise<IService> {
    return instance.post(`/api/services/create`, options);
  }

  static deleteServiceGroup(id: string) {
    return instance.delete(`/api/service-groups/delete/${id}`);
  }

  static updateServiceGroup(options: ServiceGroupPayload): Promise<IServiceGroup> {
    return instance.put(`/api/service-groups/update/${options._id}`, options);
  }

  static createServiceGroup(options: ServiceGroupPayload): Promise<IServiceGroup> {
    return instance.post(`/api/service-groups/create`, options);
  }
}
