import { api } from "./api";
import type { Review, ReviewsResponse } from "../types/review";

export function getReviews(productId: number) {
  return api.get<ReviewsResponse>(`/api/products/${productId}/reviews`);
}

export function addReview(
  productId: number,
  rating: number,
  comment: string
) {
  return api.post<Review>(`/api/products/${productId}/reviews`, {
    rating,
    comment,
  });
}

export function deleteReview(productId: number) {
  return api.delete<{ message: string }>(
    `/api/products/${productId}/reviews`
  );
}
