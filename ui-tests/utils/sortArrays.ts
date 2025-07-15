export function sortStringArrays(firstArray: string[], secondArray: string[]) {
  const result: string[][] = [];

  result.push(firstArray.sort((a, b) => a.localeCompare(b)));
  result.push(secondArray.sort((a, b) => a.localeCompare(b)));

  return result;
}
