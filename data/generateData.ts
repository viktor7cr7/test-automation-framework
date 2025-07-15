import { faker } from '@faker-js/faker';
import { IGenerateDataAuth, ProductCategory } from '../types/generateData.ts';
import { IProductCreate } from '../types/request/createProduct.ts';

export function generateDataAuth(data: Partial<IGenerateDataAuth>): IGenerateDataAuth {
  return {
    password: faker.internet.password({ length: 12, pattern: /.+/ }),
    name: faker.internet.username(),
    email: faker.internet.email(),
    ...data,
  };
}

function getRandomValueEnum<T extends object>(enums: T): T[keyof T] {
  const valuesEnum = Object.values(enums);

  const randomNumber = Math.floor(Math.random() * valuesEnum.length);
  return valuesEnum[randomNumber];
}

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export function generateDataProduct(data: Partial<IProductCreate>): IProductCreate {
  return {
    authorId: 7,
    authorName: 'Виктор222',
    imgProduct: null,
    name: faker.lorem.paragraph({ max: 1, min: 1 }),
    stock_quantity: 100,
    price: getRandomIntInclusive(50000, 300000),
    category: getRandomValueEnum(ProductCategory),
    description: faker.lorem.paragraph({ max: 1, min: 1 }),
    ...data,
  };
}
