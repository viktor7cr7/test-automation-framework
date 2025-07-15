export async function clearPrice(price: string): Promise<number> {
  const prevClear = price.replace(/^\D+(?=\d+)/, '');

  const regular = new RegExp(/^[\d\s]+(?=(0){2})/);
  return regular.test(prevClear) ? +prevClear.split(',')[0].replace(/[^\d]/g, '') : +prevClear.replace(/[^\d]/g, '');
}