export const buyProductSchema = {
  type: 'object',
  properties: {
    msg: { type: 'string' },
    success_url: { type: 'string' },
  },
  required: ['msg', 'success_url'],
};
