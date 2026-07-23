import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const { addToCart } = useCart();



  useEffect(() => {

    fetch(`http://localhost:5000/api/products/${id}`)
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