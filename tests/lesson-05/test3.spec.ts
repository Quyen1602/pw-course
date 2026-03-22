import { test, expect } from '@playwright/test';

test('Lesson 3 - Add 100 todos and delete odd ones', async ({ page }) => {
  test.setTimeout(120000);

  // Handle confirm dialog
  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  // 1. Navigate
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

  const input = page.getByPlaceholder('Enter a new task');
  const addBtn = page.getByRole('button', { name: 'Add Task' });
  const items = page.locator('#task-list li');

  // 2. Add 100 todos
  for (let i = 1; i <= 100; i++) {
    await input.fill(`Todo ${i}`);
    await addBtn.click();
  }

  // Verify added
  await expect(items).toHaveCount(100);

  // 3. Delete odd numbers 
  for (let i = 1; i <= 100; i += 2) {
    await page.locator(`#todo-${i}-delete`).click();
  }

  // 4. Verify còn 50 items
  await expect(items).toHaveCount(50);

  // 5. Verify chỉ còn số chẵn 
  const texts = await items.allTextContents();

  for (const text of texts) {
    const number = parseInt(text.replace('Todo ', ''));
    expect(number % 2).toBe(0);
  }
});