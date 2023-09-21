import axios, { AxiosInstance } from "axios";
import { BACKEND_URL } from "helpers";

export type PaginationResponse<T> = {
  page: string;
  totalCount: string;
  filter?: string;
  data: T;
};

const _instance: AxiosInstance = axios.create({
  // baseURL: "/",
  baseURL: BACKEND_URL,
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

_instance.interceptors.request.use((config) => {
  const authToken: string | null = localStorage.getItem("authToken");

  if (authToken) {
      config.headers.token = authToken;
  }

  return config;
});

export const instance: AxiosInstance = _instance;
