import { IReview } from "interfaces";
import { instance } from "./axiosInstance";

export class ReviewApi {
  static getReviews(): Promise<IReview[]> {
    return instance.get("/comments");
  }
}
