import { IOrder } from './responseOrder';
import fs from 'fs';

export interface IItem {
  item_id: number;
  product_name: string;
  price: string;
  quantity: number;
  productId: number;
}

interface IOrderItem extends Pick<IOrder, 'order_id' | 'status' | 'total_price' | 'created_at'> {}

export interface IItemsOrderResponse {
  [orderId: string]: IOrderItem & { items: IItem[] };
}

interface Rating {
  rating: string;
}

export interface IItemRatingResponse {
  rating: [] | Rating;
}
