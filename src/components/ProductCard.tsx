import { Link } from "react-router-dom";
import type { Product } from "../types/product";

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


        <button
          className="btn"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;