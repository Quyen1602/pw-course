import { test, expect } from '@playwright/test';

test('Lesson 4 - Personal notes: add 10 notes then search', async ({ page }) => {
  // 1. Navigate
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();

  // 2. Locators
  const searchBox = page.getByLabel('Search Notes:');
  const titleBox = page.getByLabel('Title:');
  const contentBox = page.getByLabel('Content:');
  const addBtn = page.getByRole('button', { name: 'Add Note' });
  const items = page.locator('#notes-list li');

  // 3. Test data (đảm bảo chứa "một hoặc nhiều")
  const notes = [
    { title: 'Login', content: 'Mô tả: đăng nhập với một hoặc nhiều tài khoản.' },
    { title: 'Logout', content: 'Mô tả: đăng xuất khỏi một hoặc nhiều thiết bị.' },
    { title: 'Add to cart', content: 'Mô tả: thêm một hoặc nhiều sản phẩm.' },
    { title: 'Checkout', content: 'Mô tả: thanh toán một hoặc nhiều đơn hàng.' },
    { title: 'Search', content: 'Mô tả: tìm kiếm một hoặc nhiều từ khóa.' },
    { title: 'Filter', content: 'Mô tả: lọc theo một hoặc nhiều tiêu chí.' },
    { title: 'Pagination', content: 'Mô tả: chuyển trang một hoặc nhiều lần.' },
    { title: 'Profile update', content: 'Mô tả: cập nhật một hoặc nhiều thông tin.' },
    { title: 'Upload avatar', content: 'Mô tả: upload một hoặc nhiều ảnh.' },
    { title: 'Reset password', content: 'Mô tả: reset một hoặc nhiều lần.' },
  ];

  // 4. Add 10 notes
  for (const note of notes) {
    await titleBox.fill(note.title);
    await contentBox.fill(note.content);
    await addBtn.click();
  }

  // 5. Verify đã add đủ 10
  await expect(items).toHaveCount(10);

  // 6. Search keyword theo đề bài
  await searchBox.fill('một hoặc nhiều');

  // 7. Verify vẫn còn 10 item 
  await expect(items).toHaveCount(10);

  // 8. Verify tất cả item đều chứa keyword 
  for (const item of await items.all()) {
    await expect(item).toContainText('một hoặc nhiều');
  }
});