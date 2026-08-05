import { api } from "./api";
import type { Product } from "../types/product";

export function getWishlist() {
  return api.get<Product[]>("/api/wishlist");
}

export function getWishlistIds() {
  return api.get<number[]>("/api/wishlist/ids");
}

export function addToWishlist(productId: number) {
  return api.post(`/api/wishlist/${productId}`);
}

export function removeFromWishlist(productId: number) {
  return api.delete(`/api/wishlist/${productId}`);
}
