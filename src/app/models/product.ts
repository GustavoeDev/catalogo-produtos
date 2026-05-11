export type ProductId = number;

export interface CatalogProduct {
  id: ProductId;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  stock: number;
}

export interface CartItem {
  productId: ProductId;
  quantity: number;
}
