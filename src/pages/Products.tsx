<<<<<<< HEAD
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { getProducts } from "../services/productService";
import type { Product } from "../types/product";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("default");

  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(unique)];
  }, [products]);

  const visibleProducts = useMemo(() => {
    let list = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category !== "All") {
      list = list.filter((product) => product.category === category);
    }

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => Number(a.price) - Number(b.price));
        break;

      case "price-desc":
        list = [...list].sort((a, b) => Number(b.price) - Number(a.price));
        break;

      case "name-asc":
        list = [...list].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      default:
        break;
    }

    return list;
  }, [products, searchTerm, category, sort]);

  function handleAddToCart(product: Product) {
    addToCart(product);
    showToast(`Added "${product.title}" to cart`, "success");
  }

  return (
    <section className="products">
      <div className="container">
        <div className="products-header">
          <h1>Explore Products</h1>
          <p>Find the best products at the best prices.</p>
        </div>

        {/* Filters */}
        <div className="product-filters">

          <div className="search-group">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Sort</label>
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value as SortOption)
              }
            >
              <option value="default">Default</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="name-asc">Name (A–Z)</option>
            </select>
          </div>

        </div>

        {loading ? (
          <p>Loading products...</p>
        ) : visibleProducts.length === 0 ? (
          <p>No products match your filters.</p>
        ) : (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        )}
      </div>
=======
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/product";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { addToCart } = useCart();


  useEffect(() => {
    fetch("https://shophub-production-5d04.up.railway.app/api/products")
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

>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
    </section>
  );
}

<<<<<<< HEAD
export default Products;
=======
export default Products;
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
