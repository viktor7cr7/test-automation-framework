export interface IItemTransaction {
  transaction_balances_id: number;
  amount: string;
  status: string;
  created_at: string;
}

export interface ITransactions {
  transactionItems: IItemTransaction[];
}
