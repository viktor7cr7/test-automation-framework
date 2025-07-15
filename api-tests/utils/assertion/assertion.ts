// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertionValue<T extends Record<string, any>, U extends keyof T, Y>(
  data: T[],
  checkValue: U,
  expectedValue: Y
): boolean {
  return data.every((value) => value[checkValue] === expectedValue);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertionSort<T extends Record<string, any>, U extends keyof T>(
  data: T[],
  checkValue: U,
  sortOptins: 'asc' | 'desc'
): boolean {
  function sortDescending(data: T[]): boolean {
    return data.every((value, index) => {
      if (index === 0) return true;
      if (value[checkValue] <= data[index - 1][checkValue]) {
        return true;
      }
      return false;
    });
  }

  function sortAscending(data: T[]): boolean {
    return data.every((value, index) => {
      if (index === 0) return true;
      if (value[checkValue] >= data[index - 1][checkValue]) {
        return true;
      }
      return false;
    });
  }

  switch (sortOptins) {
    case 'asc':
      return sortAscending(data);
    case 'desc':
      return sortDescending(data);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertionRange<T extends Record<string, any>, U extends keyof T>(
  data: T[],
  checkValue: U,
  min: number,
  max: number
): boolean {
  return data.every((value) => value[checkValue] <= max && value[checkValue] >= min);
}
