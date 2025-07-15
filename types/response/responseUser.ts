export interface IUser {
  id: number;
  image_url: string | null;
  email: string;
  amount: string;
}

export interface ICurrentUserResponse {
  user: IUser;
}

interface totalAmount {
  sum: string;
}

export interface totalAmountResponse {
  totalAmount: totalAmount[];
}
