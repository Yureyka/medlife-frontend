export interface IGallery {
  name: string;
  description: string;
  image: string;
}

export interface IReview {
  name: string;
  comment: string;
  date: string;
}

export interface IService {
  _id: string;
  name: string;
  price: number;
  serviceGroup: IServiceGroup;
}

export interface IServiceGroup {
  _id: string;
  name: string;
  key: string;
  services: IService[];
}

export type ServicePayload = {
  _id?: IService["_id"];
  name: IService["name"];
  price: IService["price"];
  serviceGroupId: string;
};

export interface IDoctor {
  _id: string;
  fullName: string;
  position: string;
  experience: number;
  experienceDetails: {
    year: number;
    description: string;
  }[];
  image: string | File | FormData;
}

export type DoctorPayload = {
  _id?: IDoctor["_id"];
  fullName: IDoctor["fullName"];
  position: IDoctor["position"];
  experience: IDoctor["experience"];
  experienceDetails: IDoctor["experienceDetails"];
  image: IDoctor["image"];
};

export interface IGalleryItem {
  _id: string;
  name: string;
  image: string | File | FormData;
}

export type GalleryPayload = {
  _id?: string;
  name: string;
  image: string | File | FormData;
};

export interface ICallRequest {
  _id: string;
  name: string;
  phone: string;
  isHandled: boolean;
  createdAt?: string;
}

export type CallRequestPayload = {
  _id?: string;
  name: string;
  phone: string;
  isHandled?: boolean;
};

export interface IAppointment {
  _id?: string;
  name: string;
  phone: string;
  service: string;
  online?: string;
  message?: string;
}

export type AppointmentPayload = {
  _id?: string;
  name: string;
  phone: string;
  service: string;
  online?: string;
  message?: string;
};
