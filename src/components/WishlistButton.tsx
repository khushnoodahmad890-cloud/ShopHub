import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";

interface Props {
  productId: number;
  productTitle?: string;
  variant?: "card" | "details";
}

export default function WishlistButton({
  productId,
  productTitle,
  variant = "card",
}: Props) {
  const { token } = useAuth();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const active = isWishlisted(productId);

  async function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (!token) {
      showToast("Log in to save items to your wishlist", "info");
      navigate("/login");
      return;
    }

    try {
      await toggleWishlist(productId);

      showToast(
        active
          ? `Removed ${productTitle || "item"} from wishlist`
          : `Added ${productTitle || "item"} to wishlist`,
        "success"
      );
    } catch (err) {
      console.error(err);
      showToast("Something went wrong. Try again.", "error");
    }
  }

  if (variant === "details") {
    return (
      <button
        onClick={handleClick}
        className={`details-wishlist-btn ${active ? "active" : ""}`}
      >
        <Heart size={18} />
        {active ? "Saved to Wishlist" : "Add to Wishlist"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`wishlist-btn ${active ? "active" : ""}`}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      title={active ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart size={18} />
    </button>
  );
}
