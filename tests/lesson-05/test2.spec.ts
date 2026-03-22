import { test } from '@playwright/test';

test('Lesson 5 - Product Page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  await page.getByText('Bài học 2: Product page').click();

  // Product 1 → 2 lần
  await page.locator('.product').nth(0).getByText('Add to cart').click();
  await page.locator('.product').nth(0).getByText('Add to cart').click();

  // Product 2 → 3 lần
  for (let i = 0; i < 3; i++) {
    await page.locator('.product').nth(1).getByText('Add to cart').click();
  }

  // Product 3 → 1 lần
  await page.locator('.product').nth(2).getByText('Add to cart').click();
});