import { TestInfo } from '@playwright/test';
import { AllureMeta } from '../types/allureMeta.ts';

export function addAllureMeta(testInfo: TestInfo, meta: AllureMeta) {
  Object.entries(meta).forEach(([type, description]) => {
    testInfo.annotations.push({ type, description });
  });
}
