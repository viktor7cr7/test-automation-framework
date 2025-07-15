import { Locator } from '@playwright/test';
import { INotValidLoginOrRegisterData } from '../types/dataDriven.ts';

export const dataLogin: INotValidLoginOrRegisterData[] = [
  {
    name: 'Авторизация пользователя с пустым email',
    email: '',
    password: 'test_test123',
    message: 'Заполните это поле.',
    keyLocator: 'emailInput',
    validateInput: async (locator: Locator) => await locator.evaluate((element) => element.checkValidity()),
    validateErrMessage: async (locator: Locator) => await locator.evaluate((element) => element.validationMessage),
  },
  {
    name: 'Авторизация пользователя с некорректным email',
    email: 'testmail.ru',
    password: 'test@3213$3',
    message: `Адрес электронной почты должен содержать символ \"@\". В адресе \"testmail.ru" отсутствует символ \"@\".`,
    keyLocator: 'emailInput',
    validateInput: async (locator: Locator) => await locator.evaluate((element) => element.checkValidity()),
    validateErrMessage: async (locator: Locator) => await locator.evaluate((element) => element.validationMessage),
  },
  {
    name: 'Авторизация пользователя с пустым паролем',
    email: 'test_test@gmail.com',
    password: '',
    message: 'Заполните это поле.',
    keyLocator: 'passwordInput',
    validateInput: async (locator: Locator) => await locator.evaluate((element) => element.checkValidity()),
    validateErrMessage: async (locator: Locator) => await locator.evaluate((element) => element.validationMessage),
  },
];

export const dataRegister: INotValidLoginOrRegisterData[] = [
  {
    name: 'Авторизация пользователя с пустым name',
    userName: '',
    email: 'test_test@gmail.com',
    password: 'test_test123',
    message: 'Заполните это поле.',
    keyLocator: 'nameInput',
    validateInput: async (locator: Locator) => await locator.evaluate((element) => element.checkValidity()),
    validateErrMessage: async (locator: Locator) => await locator.evaluate((element) => element.validationMessage),
  },
  {
    name: 'Авторизация пользователя с пустым email',
    userName: 'test_test',
    email: '',
    password: 'test_test123',
    message: 'Заполните это поле.',
    keyLocator: 'emailInput',
    validateInput: async (locator: Locator) => await locator.evaluate((element) => element.checkValidity()),
    validateErrMessage: async (locator: Locator) => await locator.evaluate((element) => element.validationMessage),
  },
  {
    name: 'Авторизация пользователя с некорректным email',
    userName: 'test_test',
    email: 'testmail.ru',
    password: 'test_test123',
    message: `Адрес электронной почты должен содержать символ \"@\". В адресе \"testmail.ru" отсутствует символ \"@\".`,
    keyLocator: 'emailInput',
    validateInput: async (locator: Locator) => await locator.evaluate((element) => element.checkValidity()),
    validateErrMessage: async (locator: Locator) => await locator.evaluate((element) => element.validationMessage),
  },
  {
    name: 'Авторизация пользователя с пустым паролем',
    userName: 'test_test',
    email: 'test_test@gmail.com',
    password: '',
    message: 'Заполните это поле.',
    keyLocator: 'passwordInput',
    validateInput: async (locator: Locator) => await locator.evaluate((element) => element.checkValidity()),
    validateErrMessage: async (locator: Locator) => await locator.evaluate((element) => element.validationMessage),
  },
];
