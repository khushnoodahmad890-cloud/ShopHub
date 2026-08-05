import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { ApiError } from "../services/api";
import {
  getReviews,
  addReview,
} from "../services/reviewService";
import type { Review } from "../types/review";
import StarRating from "./StarRating";

interface Props {
  productId: number;
}

export default function ProductReviews({ productId }: Props) {
  const { token, user } = useAuth();
  const { showToast } = useToast();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const alreadyReviewed = reviews.some(
    (r) => user && r.user_id === user.id
  );

  async function load() {
    try {
      setLoading(true);
      const data = await getReviews(productId);
      setReviews(data.reviews);
      setAverageRating(data.averageRating);
      setReviewCount(data.reviewCount);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (rating === 0) {
      showToast("Pick a star rating first", "error");
      return;
    }

    try {
      setSubmitting(true);

      await addReview(productId, rating, comment.trim());

      showToast("Review posted — thanks!", "success");

      setRating(0);
      setComment("");

      await load();
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : "Failed to post review";

      showToast(message, "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>

      <StarRating rating={averageRating} reviewCount={reviewCount} />

      {token && !alreadyReviewed && (
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="rating-input">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                size={24}
                className={n <= (hoverRating || rating) ? "filled" : ""}
                onMouseEnter={() => setHoverRating(n)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(n)}
              />
            ))}
          </div>

          <textarea
            placeholder="Share your thoughts about this product (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Posting..." : "Post Review"}
          </button>
        </form>
      )}

      {!token && (
        <p style={{ color: "var(--text)", margin: "12px 0" }}>
          Log in to leave a review.
        </p>
      )}

      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p style={{ color: "var(--text)" }}>
          No reviews yet — be the first to share your thoughts.
        </p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-card-top">
              <strong>{review.user_name}</strong>
              <span className="review-date">
                {new Date(review.created_at).toLocaleDateString()}
              </span>
            </div>

            <StarRating rating={review.rating} size={14} />

            {review.comment && <p>{review.comment}</p>}
          </div>
        ))
      )}
    </div>
  );
}
