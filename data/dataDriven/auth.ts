export const registerData = [
  {
    nameTest: 'Регистрация пользователя с пустым именем',
    name: '',
    email: 'test@gmail.com',
    password: 'Test%4124124',
    errorText: 'Имя не может быть пустым',
    statusCode: 400,
  },
  {
    nameTest: 'Регистрация пользователя с пустым email',
    name: 'testName',
    email: '',
    password: 'Test%4124124',
    errorText: 'Пожалуйста, введите корректный email,email обязателен для заполнения',
    statusCode: 400,
  },
  {
    nameTest: 'Регистрация пользователя с пустым паролем',
    name: 'testName',
    email: 'test@gmail.com',
    password: '',
    errorText: 'Пароль должен содержать минимум 8 символов,пароль обязателен для заполнения',
    statusCode: 400,
  },
];