import { dataRegister } from '../data/dataDriven.ts';
import { expect, test } from '../fixtures/service.fixtures.ts';
import { LocatorKeysRegisterPage } from '../types/dataDriven.ts';
test.describe('Регистрация пользователя с валидными данными [MOCK]', () => {
  test('Регистрация пользователя с валидными данными [MOCK]', async ({ mockService, registerService }) => {
    await mockService.register({ msg: 'Успешная регистрация! Подтвердите адрес электронной почты!' });
    await registerService.register();
  });
});

test.describe('Регистрация пользователя с невалидными данными', () => {
  dataRegister.forEach(
    ({ name, userName, email, password, keyLocator, message, validateInput, validateErrMessage }) => {
      test(name, async ({ registerPage }) => {
        await registerPage.open();
        await registerPage.register({ name: userName, email, password });
        const locator = registerPage[keyLocator as LocatorKeysRegisterPage];
        expect(await validateInput(locator)).toBe(false);
        expect(await validateErrMessage(locator)).toBe(message);
      });
    }
  );
});
