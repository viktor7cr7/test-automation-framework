import { Locator, Page } from '@playwright/test';

export async function getElements(locator: Locator) {
  return await locator.all();
}

export const changeElementDirection = async (
  page: Page,
  elementTarget: Locator,
  elementContainer: Locator,
  percentage: string,
  action?: () => Promise<void>
) => {
  const elementBox = await elementTarget.boundingBox();
  const containerBox = await elementContainer.boundingBox();

  if (elementBox && containerBox) {
    const moveBy = (parseInt(percentage) / 100) * containerBox.width;

    await page.mouse.move(elementBox.x + elementBox.width / 2, elementBox.y + elementBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(elementBox.x + elementBox.width / 2 + moveBy, elementBox.y + elementBox.height / 2);
    await page.mouse.up();
    if (action) {
      await action();
    }
  } else {
    throw new Error(`Элемент "${elementTarget} или ${elementContainer}" не найден или скрыт.`);
  }
};
