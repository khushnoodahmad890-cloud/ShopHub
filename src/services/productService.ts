const API_URL =
  "https://shophub-production-5d04.up.railway.app/api/products";
  
function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
}

// GET all products
export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

// GET single product
export async function getProduct(id: number) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

// CREATE product
export async function createProduct(product: any) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
}

// UPDATE product
export async function updateProduct(
  id: number,
  product: any
) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return response.json();
}

// DELETE product
export async function deleteProduct(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }

  return response.json();
}