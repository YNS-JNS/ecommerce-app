export interface Product {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  stock: number;
  category?: string; // optional for now
}
