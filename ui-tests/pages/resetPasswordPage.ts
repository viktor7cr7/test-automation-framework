import { logDecorator } from '../utils/decorators.ts';
import { BasePage } from './basePage.ts';
import { BASE_UI_URL } from './config/environment.ts';

export class ResetPasswordPage extends BasePage {
  public header = this.page.getByTestId('header-reset-password');
  public passwordInput = this.page.locator('#password');
  public resetPasswordButton = this.page.getByRole('button', { name: 'submit' });
  public homePageLink = this.page.locator('.login-link');
  public successNotification = this.page.locator('.Toastify__toast-body');

  uniqeElement = this.header;

  @logDecorator
  async open() {
    await this.page.goto(`${BASE_UI_URL}/reset-password/user`);
  }

  @logDecorator
  async resetPassword(password: string) {
    await this.passwordInput.fill(password);
    await this.resetPasswordButton.click();
  }
}
