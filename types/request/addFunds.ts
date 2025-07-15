export interface IAddFunds {
  amount: number;
}

export interface IWebhookStripeAddFunds {
  type: string;
  data: {
    object: {
      metadata: {
        id_transaction: number;
        type: string;
        userId: number;
        amountConvertRuble: number;
      };
    };
  };
}
