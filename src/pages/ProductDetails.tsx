import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";
<<<<<<< HEAD
import { useToast } from "../context/ToastContext";
import { getProduct } from "../services/productService";
import StarRating from "../components/StarRating";
import StockBadge from "../components/StockBadge";
import WishlistButton from "../components/WishlistButton";
import ProductReviews from "../components/ProductReviews";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getProduct(Number(id))
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error(error);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <section className="product-details">
        <div className="container">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="product-details">
        <div className="container">
          <h2>Product not found</h2>
        </div>
      </section>
    );
  }

  const outOfStock = product.stock <= 0;

  function handleAddToCart() {
    if (!product) return;
    addToCart(product);
    showToast(`Added "${product.title}" to cart`, "success");
  }

  return (
    <section className="product-details">
      <div className="container">
        <div className="details-card">
          <div className="details-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="details-info">
            <span className="category">{product.category}</span>

            <h1>{product.title}</h1>

            <StarRating
              rating={product.average_rating || 0}
              reviewCount={product.review_count || 0}
            />

            <p className="description">{product.description}</p>

            <h2 className="details-price">${product.price}</h2>

            <StockBadge stock={product.stock} />

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "18px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn"
                onClick={handleAddToCart}
                disabled={outOfStock}
              >
                {outOfStock ? "Out of Stock" : "Add to Cart"}
              </button>

              <WishlistButton
                productId={product.id}
                productTitle={product.title}
                variant="details"
              />
            </div>
          </div>
        </div>

        <ProductReviews productId={product.id} />
      </div>
    </section>
  );
}

export default ProductDetails;
=======

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const { addToCart } = useCart();



  useEffect(() => {

    fetch(`https://shophub-production-5d04.up.railway.app/api/products/${id}`)
      .then((res) => {

        if (!res.ok) {
          throw new Error("Product not found");
        }

        return res.json();

      })
      .then((data) => setProduct(data))
      .catch((error) => {

        console.error(error);
        setProduct(null);

      });

  }, [id]);



  if (!product) {

    return (

      <section className="product-details">

        <div className="container">

          <h2>
            Loading...
          </h2>

        </div>

      </section>

    );

  }



  return (

    <section className="product-details">

      <div className="container">


        <div className="details-card">


          <div className="details-image">

            <img
              src={product.image}
              alt={product.title}
            />

          </div>



          <div className="details-info">


            <span className="category">

              {product.category}

            </span>



            <h1>
              {product.title}
            </h1>



            <p className="description">

              {product.description}

            </p>



            <h2 className="details-price">

              ${product.price}

            </h2>



            <p>

              Available Stock:
              {" "}
              {product.stock}

            </p>



            <button
              className="btn"
              onClick={() => addToCart(product)}
            >

              Add to Cart

            </button>


          </div>


        </div>


      </div>

    </section>

  );

}

export default ProductDetails;
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
