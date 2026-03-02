import { expect, test } from '../../fixtures/services-fixtures.ts';
import { updateInfoUser } from '../utils/queryDB/user.ts';

test('Обновление данных пользователя', async ({ userService }) => {
  const response = await userService.updateInfoUser({ name: 'test222@mail.ru', email: 'crash@gmail.com' });
  expect(response.msg).toBe('Данные успешно обновлены');

  await updateInfoUser();
});
