import { dbConntectAdmin } from '../../../db/connect.ts';

export async function deleteProduct(productId: number[]) {
  const tasks = productId.map(async (id) => {
    await dbConntectAdmin.query(`delete from products where product_id = $1 `, [id]);
  });
  try {
    await Promise.all(tasks);
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}
