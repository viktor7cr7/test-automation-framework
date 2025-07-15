import { BasePage } from './basePage.ts';
import { IRegisterData } from '../../types/request/auth.ts';
import { BASE_UI_URL } from './config/environment.ts';
import { logDecorator } from '../utils/decorators.ts';

export class RegisterPage extends BasePage {
  public header = this.page.locator('.user-register-header');
  public nameInput = this.page.locator('#name');
  public emailInput = this.page.locator('#email');
  public passwordInput = this.page.locator('#password');
  public signInLink = this.page.locator('.login-link');
  public registerButton = this.page.getByTestId('button-register');
  public successNotification = this.page.locator('.Toastify__toast-body');

  uniqeElement = this.header;

  @logDecorator
  async open() {
    await this.page.goto(`${BASE_UI_URL}/register/user`);
  }

  @logDecorator
  async register({ name, email, password }: IRegisterData) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.registerButton.click();
  }
}
