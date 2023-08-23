import { instance } from "./axiosInstance";

interface IGallery {
  name: string;
  description: string;
  image: string;
}

export class GalleryApi {
  static getGalleryImages(): Promise<IGallery[]> {
    return instance.get("/comments");
  }
}
