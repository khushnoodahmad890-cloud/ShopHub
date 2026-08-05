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
