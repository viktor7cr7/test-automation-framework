export function transformDate(arrDate: string[]) {
  const clearDate = arrDate.map((date) => {
    const clearDate = date.replace(/[^\d.]+/, '');
    const [day, month, year] = clearDate.split('.');
    return `${month}.${day}.${year}`;
  });
  return clearDate
}