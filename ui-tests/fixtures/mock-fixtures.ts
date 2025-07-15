import { test as base } from './pages-fixtures.ts';
import { MockService } from '../services/mock-service.ts';

interface IMockFixtures {
  mockService: MockService;
}

export const test = base.extend<IMockFixtures>({
  mockService: async ({ page }, use) => {
    return await use(new MockService(page));
  },
});

export { expect } from '@playwright/test';
