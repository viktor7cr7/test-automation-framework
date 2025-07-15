import { expect, test } from '../fixtures/service.fixtures.ts';

test('Отправка письма для восстановления пароля [MOCK]', async ({ forgotPasswordPage, mockService }) => {
  await mockService.forgotPassword({ msg: 'Пожалуйста проверьте свою почту для сброса пароля' });
  await forgotPasswordPage.open();
  await forgotPasswordPage.forgotPassword('test_test@gmail.com');
  await expect(forgotPasswordPage.successNotification).toHaveText('Пожалуйста проверьте свою почту для сброса пароля');
});
