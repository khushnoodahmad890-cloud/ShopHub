import { api } from "./api";
import type { Product, ProductInput } from "../types/product";

export function getProducts() {
  return api.get<Product[]>("/api/products");
}

export function getProduct(id: number) {
  return api.get<Product>(`/api/products/${id}`);
}

export function createProduct(product: ProductInput) {
  return api.post<Product>("/api/products", product);
}

export function updateProduct(id: number, product: ProductInput) {
  return api.put<Product>(`/api/products/${id}`, product);
}

export function deleteProduct(id: number) {
  return api.delete<{ message: string; product: Product }>(
    `/api/products/${id}`
  );
}
