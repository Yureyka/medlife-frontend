import { PaginationResponse, instance } from "./axiosInstance";
import { GalleryPayload, IGalleryItem } from "interfaces";

export class GalleryApi {
  static getGallery(): Promise<IGalleryItem[]> {
    return instance.get("/gallery");
  }

  static getGalleryImages(
    pageSize: number,
    page: number
  ): Promise<PaginationResponse<IGalleryItem[]>> {
    return instance.get(`/gallery-paginated?pageSize=${pageSize}&page=${page}`);
  }

  static createGalleryImage(options: GalleryPayload): Promise<IGalleryItem[]> {
    return instance.post(`/gallery/create`, options, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  static deleteGalleryImage(id: string) {
    return instance.delete(`/gallery/delete/${id}`);
  }
}
