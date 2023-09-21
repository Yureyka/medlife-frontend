import { instance } from "./axiosInstance";
import { UserPayload, IUser } from "interfaces";

export class UserApi {
  static getMe(): Promise<{ token: string }> {
    return instance.get(`/api/user/me`);
  }

  static login(options: any): Promise<any> {
    return instance.post(`/api/user/login`, options);
  }

  static create(options: any): Promise<any> {
    return instance.post(`/api/user/create`, options);
  }

  static createAppointmentRequest(options: UserPayload): Promise<IUser> {
    return instance.post(`/api/appointments/create`, options);
  }

  static updateAppointmentRequest(options: UserPayload): Promise<IUser> {
    return instance.put(`/api/appointments/update/${options._id}`, options);
  }
}
