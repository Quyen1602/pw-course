import { test } from '@playwright/test';

test('Lesson 5 - Register Page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // vào bài 1
  await page.getByText('Bài học 1: Register Page').click();

  // Fill form
  await page.locator('#username').fill('quyen test');
  await page.locator('#email').fill('quyen@test.com');

  // Gender
  await page.locator('input[value="female"]').check();

  // Hobbies (checkbox)
  await page.getByLabel('Reading').check();
  await page.getByLabel('Traveling').check();

  // Interests (dropdown multiple)
  await page.locator('#interests').selectOption(['Art', 'Music']);

  // Country
  await page.locator('#country').selectOption('Canada');

  // Date of Birth
  await page.locator('#dob').fill('1998-01-01');

  // Upload file
  await page.locator('#profile').setInputFiles('tests/lesson-05/01-xpath.txt');

  // Biography
  await page.locator('#bio').fill('Automation Tester');

  // Submit
  await page.locator('button[type="submit"]').click();
});