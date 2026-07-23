const API_URL = "http://localhost:5000/api/orders";
export async function updateOrderStatus(
  id: number,
  status: string
) {
  const response = await fetch(
    `http://localhost:5000/api/orders/admin/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update order");
  }

  return response.json();
}
function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function createOrder(total: number, items: any[]) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      total,
      items,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to place order");
  }

  return data;
}

export async function getMyOrders() {
  const response = await fetch(`${API_URL}/my-orders`, {
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch orders");
  }

  return data;
}
export async function getAllOrders() {
  const response = await fetch(
    "http://localhost:5000/api/orders/admin",
    {
      headers: {
        Authorization:
          "Bearer " + localStorage.getItem("token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load orders");
  }

  return response.json();
}