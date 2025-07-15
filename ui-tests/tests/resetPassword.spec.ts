import { expect, test } from '../fixtures/service.fixtures.ts';

test('Сброс пароля', async ({ resetPasswordPage, mockService }) => {
  await mockService.resetPassword({ msg: 'успех' });
  await resetPasswordPage.open();
  await resetPasswordPage.resetPassword('test_test');
  await expect(resetPasswordPage.successNotification).toHaveText('Пароль успешно обновлен');
});
