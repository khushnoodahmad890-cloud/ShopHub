export type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export interface OrderItemInput {
  id: number;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  total: string;
  status: OrderStatus;
  created_at: string;
}

export interface AdminOrder extends Order {
  name: string;
  email: string;
}
