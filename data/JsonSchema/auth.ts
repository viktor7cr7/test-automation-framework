export const responseDefaultSchema = {
  type: 'object',
  properties: {
    msg: { type: 'string' },
  },
  required: ['msg'],
};

export const responseNestSchema = {
  type: 'object',
  properties: {
    message: { type: 'array', items: { type: 'number' } },
    info: { type: 'string' },
  },
  required: ['message', 'info'],
  additionalProperties: false,
};
