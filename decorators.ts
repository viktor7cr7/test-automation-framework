import 'reflect-metadata';
const limitMetadataKey = Symbol('limit');

interface IMyCar {
  fuel: string;
  open: boolean;
  freeSeats: number;
  isOpen: (comment: string) => boolean;
}

class MyCar implements IMyCar {
  fuel = '49%';
  open = true;
  errors: any;
  _weight: any;

  @logOnSet
  set weight(value: number) {
    this._weight = this._weight + value;
  }

  @logOnGet
  get weight() {
    return this._weight;
  }

  freeSeats: number = 9;

  isOpen(comment: string) {
    console.log(comment);
    return this.open ? true : false;
  }

  startTravel(passangers: number) {
    console.log(`Started with ${passangers} passangers`);
  }
}

function validate(target: object, propertKey: string | symbol, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function (...args: any) {
    const limitedParameters: number[] = Reflect.getOwnMetadata(limitMetadataKey, target, propertKey);

    if (limitedParameters) {
      for (const index of limitedParameters) {
        if (args[index] > 4) {
          throw Error('Нельзя больше 4х пассажиров');
        }
      }
    }
    return method.apply(this, args);
  };
}

function limit(target: object, propertKey: string | symbol, parameterIndex: number) {
  let limitedParameters: number[] = Reflect.getOwnMetadata(limitMetadataKey, target, propertKey) || [];
  limitedParameters.push(parameterIndex);
  Reflect.defineMetadata(limitMetadataKey, limitedParameters, target, propertKey);
}

function logOnSet(target: (value: number) => void, context: ClassSetterDecoratorContext) {
  return function (this: any, ...args: any) {
    console.log(`Метод был вызван с параметрами ${args}`);
    return target?.apply(this, args);
  };
}

function logOnGet(target: () => number, context: ClassGetterDecoratorContext) {
  return function (this: any, ...args: any) {
    console.log(`Получено значение ${String(context.name)}`);
    return target?.apply(this, args);
  };
}

/* function log(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const oldValue = descriptor.set;
  const oldGet = descriptor.get;
  descriptor.set = function (this: any, ...args: any) {
    console.log(`Метод был вызван с параметрами ${args}`);
    return oldValue?.apply(this, args);
  };

  descriptor.get = function () {
    console.log(`Получаем свойство ${String(propertyKey)}`);
    return oldGet?.apply(this);
  };
} */

function checkMax(limit: number) {
  return function (target: undefined, context: ClassFieldDecoratorContext) {
    return function (this: any, newAmount: number) {
      if (newAmount >= 1 && newAmount <= limit) {
        return newAmount;
      } else {
        throw Error(`Больше ${limit} не может быть установлено`);
      }
    };
  };
}

/* function checkMax(limit: number) {
  return function (target: object, propertyKey: string | symbol) {
    let freeSeats: number;

    const getter = function () {
      return freeSeats;
    };

    const setter = function (newAmount: number) {
      if (newAmount >= 1 && newAmount <= limit) {
        freeSeats = newAmount;
      } else {
        Object.defineProperty(target, 'errors', {
          value: `Больше ${limit} не может быть установлено`,
        });
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
} */

/* function checkAmountOfFuel<T, A extends any[], R>(
  target: (this: T, ...args: A) => R,
  context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
  return function (this: T, ...args: A) {
    console.log(`Метод ${target.name} был запущен`);
    return target.apply(this, args);
  };
}

function changeOpenCar(value: boolean) {
  return <T extends { new (...args: any[]): object }>(target: T, context: ClassDecoratorContext<T>) => {
    return class extends target {
      open = value;
    };
  };
} */
