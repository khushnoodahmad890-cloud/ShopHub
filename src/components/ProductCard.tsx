import { Link } from "react-router-dom";
import type { Product } from "../types/product";
<<<<<<< HEAD
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
=======

interface ProductCardProps {
  product: Pick<Product, "id" | "title" | "price" | "image">;
  onAddToCart: () => void;
}

function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {

  return (
    <div className="product-card">

      <Link 
        to={`/products/${product.id}`}
        className="product-image"
      >
        <img
          src={product.image}
          alt={product.title}
        />
      </Link>


      <div className="product-info">

        <Link to={`/products/${product.id}`}>
          <h3>
            {product.title}
          </h3>
        </Link>


        <p className="price">
          ${product.price}
        </p>

>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432

        <button
          className="btn"
          onClick={onAddToCart}
<<<<<<< HEAD
          disabled={outOfStock}
        >
          {outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
=======
        >
          Add to Cart
        </button>

      </div>

>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
    </div>
  );
}

<<<<<<< HEAD
export default ProductCard;
=======
export default ProductCard;
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
