import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { getWishlist } from "../services/wishlistService";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { wishlistIds } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  async function load() {
    try {
      setLoading(true);
      const data = await getWishlist();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-sync the list whenever the wishlist changes elsewhere (e.g. a heart
  // toggled on the Products page) so removing an item here updates instantly.
  useEffect(() => {
    setProducts((prev) =>
      prev.filter((product) => wishlistIds.includes(product.id))
    );
  }, [wishlistIds]);

  function handleAddToCart(product: Product) {
    addToCart(product);
    showToast(`Added "${product.title}" to cart`, "success");
  }

  return (
    <section className="products">
      <div className="container">
        <div className="products-header">
          <h1>My Wishlist</h1>
          <p>Products you've saved for later.</p>
        </div>

        {loading ? (
          <p>Loading wishlist...</p>
        ) : products.length === 0 ? (
          <div className="wishlist-empty">
            <Heart size={40} style={{ marginBottom: 12, opacity: 0.4 }} />
            <p>Your wishlist is empty.</p>
            <p>
              <Link to="/products" className="btn" style={{ marginTop: 16 }}>
                Browse Products
              </Link>
            </p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
