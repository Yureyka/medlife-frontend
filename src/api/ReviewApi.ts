import { IReview, ReviewPayload } from "interfaces";
import { PaginationResponse, instance } from "./axiosInstance";

export class ReviewApi {
  static getReviews(): Promise<IReview[]> {
    return instance.get("/api/comments");
  }

  static getReviewsPaginated(
    pageSize: number,
    page: number,
    filter: string
  ): Promise<PaginationResponse<IReview[]>> {
    return instance.get(
      `/api/comments-paginated?pageSize=${pageSize}&page=${page}&filter=${filter}`
    );
  }

  static createReview(options: ReviewPayload): Promise<IReview[]> {
    return instance.post(`/api/comments/create`, options);
  }

  static updateReview(options: ReviewPayload): Promise<IReview[]> {
    return instance.put(`/api/comments/update/${options._id}`, options);
  }

  static deleteReview(id: string) {
    return instance.delete(`/api/comments/delete/${id}`);
  }
}
