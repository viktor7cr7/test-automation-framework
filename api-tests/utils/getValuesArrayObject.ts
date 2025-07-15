export function getValuesArrayObjects<T extends object, U extends keyof T>(arr: T[], haveValue: U) {
  const values = arr.map((value) => value[haveValue]);
  return values;
}
