import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";

interface ApiResponse {
  data: any;
}

const _instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3004",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

_instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// export const get = <T>(url: string, params?: any): Promise<AxiosResponse<T>> =>
//   instance.get(url, { params }).then((response) => response);

// export const post = (url: string, data?: any): any =>
//   instance.post<ApiResponse>(url, data).then((response) => response);

export const instance: AxiosInstance = _instance;
