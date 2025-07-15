export interface ISetRatingItem {
  rating: number;
  productId: number;
  orderId: number;
}

export interface IGetRatingItem {
  itemId: number;
  productId: number;
}
