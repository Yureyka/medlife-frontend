import { PaginationResponse, instance } from "./axiosInstance";
import { INews, NewsPayload } from "interfaces";

export class NewsApi {
  static getNews(): Promise<INews[]> {
    return instance.get("/api/news/all");
  }

  static getNewsById(id: string): Promise<INews> {
    return instance.get(`/api/news/${id}`);
  }

  static getNewsPaginated(
    pageSize: number,
    page: number
  ): Promise<PaginationResponse<INews[]>> {
    return instance.get(`/api/news?pageSize=${pageSize}&page=${page}`);
  }

  static createNews(options: NewsPayload): Promise<INews[]> {
    return instance.post(`/api/news/create`, options, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  static updateNews(options: NewsPayload): Promise<INews[]> {
    return instance.put(`/api/news/update/${options._id}`, options, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  static deleteNews(id: string) {
    return instance.delete(`/api/news/delete/${id}`);
  }
}
