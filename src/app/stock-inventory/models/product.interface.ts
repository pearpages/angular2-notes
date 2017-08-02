export interface Product {
  id: number;
  price: number;
  name: string
}

export interface Stock {
  product_id: string;
  quantity: number;
}
