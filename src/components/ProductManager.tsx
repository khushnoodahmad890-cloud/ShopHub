import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useToast } from "../context/ToastContext";
import { ApiError } from "../services/api";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";
import type { Product } from "../types/product";

export default function ProductManager() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
const [search, setSearch] = useState("");
const [categoryFilter, setCategoryFilter] = useState("All");
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    description: "",
    stock: 0,
  });
const { dark } = useTheme();
const { showToast } = useToast();
  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    categoryFilter === "All" ||
    product.category === categoryFilter;

  return matchesSearch && matchesCategory;
});
 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  try {
    if (editingId) {
      await updateProduct(editingId, form);
      showToast(`"${form.title}" updated`, "success");
    } else {
      await createProduct(form);
      showToast(`"${form.title}" added to catalog`, "success");
    }

    setForm({
      title: "",
      price: "",
      image: "",
      category: "",
      description: "",
      stock: 0,
    });

    setEditingId(null);

    loadProducts();
  } catch (error) {
    const message =
      error instanceof ApiError ? error.message : "Failed to save product";

    showToast(message, "error");
    console.error(error);
  }
}
async function handleDelete(id: number) {
  if (!window.confirm("Delete this product?")) return;

  try {
    await deleteProduct(id);
    showToast("Product deleted", "success");
    loadProducts();
  } catch (error) {
    const message =
      error instanceof ApiError ? error.message : "Failed to delete product";

    showToast(message, "error");
    console.error(error);
  }
}

  return (
   <div className={`product-manager ${dark ? "dark" : ""}`}>

      <h2>Product Management</h2>
<div className="product-filters">

  <input
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={categoryFilter}
    onChange={(e) =>
      setCategoryFilter(e.target.value)
    }
  >
    <option value="All">
      All Categories
    </option>

    <option value="Electronics">
      Electronics
    </option>

    <option value="Clothing">
      Clothing
    </option>

    <option value="Accessories">
      Accessories
    </option>

  </select>

</div>
      <form onSubmit={handleSubmit} className="product-form">

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: Number(e.target.value),
            })
          }
        />

        <button type="submit">
  {editingId ? "Update Product" : "Add Product"}
</button>

      </form>

    <div className="table-wrapper">
  <table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Price</th>
      <th>Stock</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
   {filteredProducts.map((product) => (
      <tr key={product.id}>

        <td>
          <img
            src={product.image}
            alt={product.title}
            width="60"
            height="60"
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </td>

        <td>{product.title}</td>

        <td>${product.price}</td>

        <td>{product.stock}</td>

        <td>
          <button
            onClick={() => {
              setEditingId(product.id);

              setForm({
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
                description: product.description,
                stock: product.stock,
              });
            }}
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </td>

      </tr>
    ))}
  </tbody>
</table>
</div>
    </div>
  );
}