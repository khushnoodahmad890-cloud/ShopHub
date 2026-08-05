import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import StarRating from "./StarRating";
import StockBadge from "./StockBadge";
import WishlistButton from "./WishlistButton";

interface ProductCardProps {
  product: Pick<
    Product,
    "id" | "title" | "price" | "image" | "stock" | "average_rating" | "review_count"
  >;
  onAddToCart: () => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const outOfStock = product.stock <= 0;

  return (
    <div className="product-card">
      <WishlistButton productId={product.id} productTitle={product.title} />

      <Link to={`/products/${product.id}`} className="product-image">
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="product-info">
        <Link to={`/products/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>

        {product.average_rating !== undefined && (
          <StarRating
            rating={product.average_rating}
            reviewCount={product.review_count}
            size={14}
          />
        )}

        <p className="price">${product.price}</p>

        <StockBadge stock={product.stock} />

        <button
          className="btn"
          onClick={onAddToCart}
          disabled={outOfStock}
        >
          {outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
