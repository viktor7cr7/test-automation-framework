import { APIRequestContext } from '@playwright/test';
import { USER_EMAIL_LOGIN, USER_PASSWORD } from '../../config/environment.ts';
import { config } from '../../config/config.ts';
import { IAuthHelper } from '../../../types/request/auth.ts';

export class AuthHelper implements IAuthHelper {
  public isAuthenticated: boolean = false;
  public defaultHeaders: object = {};

  constructor(public apiContext: APIRequestContext) {
    this.apiContext = apiContext;
  }

  public async authIfNeeded() {
    if (this.isAuthenticated) return;

    try {
      console.log(config.baseUrl)
      console.log(USER_EMAIL_LOGIN)
      console.log(USER_PASSWORD)
      const response = await this.apiContext.post(`${config.baseUrl}/api/v1/auth/login`, {
        data: {
          email: USER_EMAIL_LOGIN,
          password: USER_PASSWORD,
        },
      });

      if (response.status() !== 200) {
        console.log(response.status())
        console.log(response.statusText())
        console.log(await response.text())
        throw new Error('Ошибка авторизации, проверьте данные');
      }

      const cookies = await this.apiContext.storageState();

      const tokenCookie = cookies.cookies.find((c) => c.name === 'token');

      if (!tokenCookie) {
        throw new Error('Токен не получен');
      }

      this.defaultHeaders = {
        Cookie: `token=${tokenCookie.value}`,
      };

      this.isAuthenticated = true;
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      throw new Error('Не удалось выполнить авторизацию');
    }
  }
}
