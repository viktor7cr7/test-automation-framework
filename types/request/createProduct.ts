import { ProductCategory } from '../generateData.ts';

export interface IProductCreate {
  name: string;
  price: number;
  description: string;
  category: ProductCategory;
  authorName: 'Виктор222';
  imgProduct: null;
  stock_quantity: number;
  authorId: 7;
  quantity?: number
}
