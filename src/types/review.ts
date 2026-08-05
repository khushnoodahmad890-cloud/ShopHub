export interface Review {
  id: number;
  user_id: number;
  rating: number;
  comment: string | null;
  created_at: string;
  user_name: string;
}

export interface ReviewsResponse {
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
}
