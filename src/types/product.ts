export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
  stock: number;
<<<<<<< HEAD
  average_rating?: number;
  review_count?: number;
}

export type ProductInput = Omit<
  Product,
  "id" | "average_rating" | "review_count"
>;
=======
}
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
