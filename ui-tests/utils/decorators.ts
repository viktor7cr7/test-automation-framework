import { allure } from 'allure-playwright';

export function logDecorator(target: (this: Function, ...args: any[]) => void, context: ClassMethodDecoratorContext) {
  return async function (this: Function, ...args: any[]) {
    return await allure.step(`Вызываем ${String(context.name)} на странице ${this!.constructor.name}`, async () => {
      return target.apply(this, args);
    });
  };
}

export function logStepWithReturn<This, Args extends any[], ReturnType>(
  target: (this: This, ...args: Args) => Promise<ReturnType>,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<ReturnType>>
) {
  return async function (this: This, ...args: Args): Promise<ReturnType> {
    const result = await allure.step(
      `Вызов ${String(context.name)} на странице ${this!.constructor.name}`,
      async () => (await target.apply(this, args)) as void
    );

    return result as ReturnType;
  };
}
