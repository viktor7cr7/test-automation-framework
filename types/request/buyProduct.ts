export interface IItem {
  product_id: number;
  price: number;
  quantity: number;
  name?: string,
  description?: string
}

export interface IBuyProduct {
  paymentMethod: 'Credit Card' | 'Balance';
  items: IItem[];
}

export interface IWebhookStripe {
  type: string;
  data: {
    object: {
      metadata: {
        orderId: number;
        type: string;
        infoQuntityAndIdProduct: {
          product_id: number;
          quantity: number;
        }[];
      };
    };
  };
}
