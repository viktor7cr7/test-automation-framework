export const itemsOrderSchema = {
  type: 'object',
  patternProperties: {
    '^[0-9]+$': {
      type: 'object',
      properties: {
        order_id: { type: 'number' },
        status: { type: 'string', enum: ['paid', 'unpaid'] },
        total_price: { type: 'string' },
        created_at: { type: 'string' },
        items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              item_id: { type: 'number' },
              product_name: { type: ['string', 'null'] },
              price: { type: 'string' },
              quantity: { type: 'number' },
              productId: { type: 'number' },
            },
            required: ['item_id', 'product_name', 'price', 'quantity', 'productId'],
            additionalProperties: false,
          },
        },
      },
      required: ['order_id', 'status', 'total_price', 'created_at', 'items'],
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

export const getRatingItemSchema = {
  type: 'object',
  properties: {
    rating: {
      type: 'object',
      properties: {
        rating: {
          type: 'string',
        },
      },
      required: ['rating'],
      additionalProperties: false,
    },
  },
  required: ['rating'],
  additionalProperties: false,
};
