import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/product";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { addToCart } = useCart();


  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);



  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );



  return (
    <section className="products">

      <div className="container">

        <div className="products-header">

          <h1>
            Explore Products
          </h1>

          <p>
            Find the best products at the best prices.
          </p>

        </div>



        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />



        <div className="product-grid">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;