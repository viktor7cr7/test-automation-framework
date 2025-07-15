import { Locator } from '@playwright/test';
import { HomePage } from '../pages/homePage.ts';
import { RegisterPage } from '../pages/registerPage.ts';

export type LocatorKeysHomePage = keyof Pick<HomePage, 'emailInput' | 'passwordInput'>;
export type LocatorKeysRegisterPage = keyof Pick<RegisterPage, 'emailInput' | 'passwordInput' | 'nameInput'>;

export interface INotValidLoginOrRegisterData {
  name: string;
  userName?: string;
  keyLocator: string;
  email: string;
  password: string;
  message: string;
  validateInput: (locator: Locator) => Promise<boolean>;
  validateErrMessage: (locator: Locator) => Promise<boolean>;
}
