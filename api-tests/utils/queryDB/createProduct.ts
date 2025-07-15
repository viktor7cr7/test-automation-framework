import { dbConntectAdmin } from '../../../db/connect.ts';
import { IProductCreate } from '../../../types/request/createProduct.ts';
import { generateDataProduct } from '../../../data/generateData.ts';

export async function createProduct(quantity: number, data?: IProductCreate | null) {
  const tasks = Array.from({ length: quantity }).map(async () => {
    const { name, price, description, category, authorName, imgProduct, stock_quantity, authorId } =
      data ?? generateDataProduct({});

    const product_id = await dbConntectAdmin.query(
      'INSERT INTO products(name, price, description, category, author_name, image_url,stock_quantity, author_id ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING product_id, price, name, description',
      [name, price, description, category, authorName, imgProduct, stock_quantity, authorId]
    );

    return {
      productId: product_id[0]['product_id'],
      price: product_id[0]['price'],
      name: product_id[0]['name'],
      description: product_id[0]['description'],
    };
  });
  try {
    const ids = Promise.all(tasks);
    return ids;
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}
