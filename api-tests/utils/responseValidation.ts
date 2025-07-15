import { expect } from '@playwright/test';
import { Response } from '../../types/response/response.ts';

export function validateResponse<T extends Response<object>>(data: T, expectedStatus: number) {
  expect(data.status).toBe(expectedStatus);
}
