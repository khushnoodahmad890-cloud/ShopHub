export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
  stock: number;
  average_rating?: number;
  review_count?: number;
}

export type ProductInput = Omit<
  Product,
  "id" | "average_rating" | "review_count"
>;