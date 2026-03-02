import { test } from '@playwright/test';
import { schemaValidation } from '../utils/schemaValidation';
import { responseNestSchema } from '../../data/JsonSchema/auth';

test('43', async ({ request }) => {
  const response = await request.post('http://localhost:3000/auth/register', {
    data: {
      name: 'A',
      email: 'not-email',
      password: '123',
    },
  });

  schemaValidation(await response.json(), responseNestSchema);
});
