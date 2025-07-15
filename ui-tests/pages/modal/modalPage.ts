import { expect } from '@playwright/test';
import { BasePage } from '../basePage.ts';

export abstract class ModalPage extends BasePage {
  async waitForClosed() {
    await expect(this.uniqeElement).toBeHidden();
  }
}
