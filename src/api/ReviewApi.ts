import {instance} from "./axiosInstance";

interface IReview {
  name: string;
  comment: string;
  date: string;
}

export class ReviewApi {
  static getReviews(): Promise<IReview[]> {
    return instance.get("/comments");
  }
}
