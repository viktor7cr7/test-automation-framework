export const ordersSchema = {
  type: 'object',
  properties: {
    orders: {
      type: 'array',
      items: {
        properties: {
          item_id: { type: 'number' },
          order_id: { type: 'number' },
          product_id: { type: 'number' },
          product_name: { type: ['string', 'null'] },
          price: { type: 'string' },
          total_price: { type: 'string' },
          status: { type: 'string' },
          created_at: { type: 'string' },
          quantity: { type: 'number' },
        },
        required: [
          'item_id',
          'order_id',
          'product_id',
          'product_name',
          'price',
          'total_price',
          'status',
          'created_at',
          'quantity',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['orders'],
  additionalProperties: false,
};
