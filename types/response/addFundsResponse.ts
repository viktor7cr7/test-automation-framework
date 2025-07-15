export interface IWebhookStripeAddFundsResponse {
  session: {
    type: string;
    success_url: string;
    cancel_url: string;
    payment_status: string;
    url: string;
    metadata: {
      id_transaction: number;
      type: string;
      userId: number;
      amountConvertRuble: number;
    };
  };
}
