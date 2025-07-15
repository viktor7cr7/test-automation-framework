/* eslint-disable playwright/valid-title */
import { expect, test } from '../../fixtures/services-fixtures.ts';
import { registerData } from '../../data/dataDriven/auth.ts';
import { STATUS_CODES } from '../../data/statusCode.ts';
import { USER_EMAIL_REGISTER } from '../config/environment.ts';

test.describe('Регистрация пользователя', () => {
  test.afterAll(async ({ userController }) => {
    const response = await userController.deleteUser(USER_EMAIL_REGISTER);
    expect(response.status).toBe(STATUS_CODES.OK);
  });

  test('Регистрация пользователя c валидными данными', async ({ authServices }) => {
    const response = await authServices.register();
    expect(response.msg).toBe('Успешная регистрация! Подтвердите адрес электронной почты!');
  });

  test.describe('Регистрация пользователя с невалидными данными', () => {
    registerData.forEach(({ nameTest, name, email, password, errorText, statusCode }) => {
      test(nameTest, async ({ authController }) => {
        const response = await authController.register({ name, email, password });
        expect(response.body.msg).toBe(errorText);
        expect(response.status).toBe(statusCode);
      });
    });
  });

  test('Верификация email', async ({ authServices }) => {
    const response = await authServices.verifyEmail();
    expect(response.msg).toBe('Email Verified');
  });

  test('Отправка письма для сброса пароля', async ({ authServices }) => {
    const response = await authServices.forgotPassword();
    expect(response.msg).toBe('Пожалуйста проверьте свою почту для сброса пароля');
  });

  test('Сброс пароля', async ({ authServices }) => {
    const response = await authServices.resetPassword();
    expect(response.msg).toBe('успех');
  });
});
