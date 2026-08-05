import { Star } from "lucide-react";

interface Props {
  rating: number;
  reviewCount?: number;
  size?: number;
}

export default function StarRating({ rating, reviewCount, size = 16 }: Props) {
  const rounded = Math.round(rating);

  return (
    <div className="rating-summary">
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            size={size}
            className={n > rounded ? "empty" : ""}
          />
        ))}
      </div>

      {reviewCount !== undefined && (
        <span>
          {reviewCount > 0
            ? `${rating.toFixed(1)} (${reviewCount} review${
                reviewCount === 1 ? "" : "s"
              })`
            : "No reviews yet"}
        </span>
      )}
    </div>
  );
}
