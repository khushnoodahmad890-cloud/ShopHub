<<<<<<< HEAD
import { api } from "./api";
import type { AdminOrder, Order, OrderItemInput } from "../types/order";

export function createOrder(total: number, items: OrderItemInput[]) {
  return api.post<{ message: string; order: Order }>("/api/orders", {
    total,
    items,
  });
}

export function getMyOrders() {
  return api.get<Order[]>("/api/orders/my-orders");
}

export function getAllOrders() {
  return api.get<AdminOrder[]>("/api/orders/admin");
}

export function updateOrderStatus(id: number, status: string) {
  return api.put<AdminOrder>(`/api/orders/admin/${id}`, { status });
}
=======
const API_URL = "https://shophub-production-5d04.up.railway.app/api/orders";
export async function updateOrderStatus(
  id: number,
  status: string
) {
  const response = await fetch(
    `https://shophub-production-5d04.up.railway.app/api/orders/admin/${id}`,
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
    "https://shophub-production-5d04.up.railway.app/api/orders/admin",
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
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
