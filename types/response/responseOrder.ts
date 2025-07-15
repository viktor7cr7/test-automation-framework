export interface IOrder {
  item_id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  price: string;
  total_price: string;
  status: string;
  created_at: string;
}

export interface IOrdersResponse {
  orders: IOrder[];
}
