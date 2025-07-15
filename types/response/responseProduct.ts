import { ResponseInfo } from './response.ts';

export interface IProducts {
  product_id: number;
  author_name: string;
  author_id: number;
  name: string;
  description: string;
  category: string;
  stock_quantity: number;
  status: string;
  rating: number;
  created_at: string;
  percentage: number | null;
  image_url: string | null;
  old_price: number;
  new_price: number;
  start_date: string | null;
  end_date: string | null;
  row_number: number;
}

export interface IProductsResponse {
  totalProducts: string;
  numOfPages: number;
  currentPage: number;
  products: IProducts[];
}

export interface IProduct {
  product: Pick<
    IProducts,
    'product_id' | 'old_price' | 'stock_quantity' | 'new_price' | 'percentage' | 'start_date' | 'end_date'
  >;
}

export interface IProductResponse {
  product: IProduct[];
  ratingProduct: string[];
}

export interface IBuyProductResponse extends ResponseInfo {
  success_url: 'http://localhost:5173/dashboard/user/orders';
  msg: string;
}

export interface IBuyProductResponseStripe {
  session: {
    id: string;
    cancel_url: string;
    success_url: string;
    currency: string;
    metadata: {
      infoQuntityAndIdProduct: {
        product_id: number;
        quantity: number;
      }[];
      orderId: number;
      type: string;
    };
    payment_status: string;
    url: string;
  };
}

export interface IWebhookStripe {
  received: boolean;
}
