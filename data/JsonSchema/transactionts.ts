export const transactionsSchema = {
  type: 'object',
  properties: {
    transactionItems: {
      type: 'array',
      items: {
        properties: {
          transaction_balances_id: { type: 'number' },
          amount: { type: 'string' },
          status: { type: 'string' },
          created_at: { type: 'string' },
        },
        required: ['transaction_balances_id', 'amount', 'status', 'created_at'],
        additionalProperties: false,
      },
    },
  },
  required: ['transactionItems'],
  additionalProperties: false,
};
