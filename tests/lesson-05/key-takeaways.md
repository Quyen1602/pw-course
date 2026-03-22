## Lesson 5 – DOM, Selector & Playwright Basic

# 🧩 1. DOM (Document Object Model)

## 1.1 Website nhìn như thế nào?

👀 Người dùng thấy:
- Text
- Image
- Link
- Input

💻 Máy tính thấy:
- Cây cấu trúc (Tree)

## 1.2 Mở DOM

- Nhấn `F12`
- Right click → Inspect → Elements

## 1.3 DOM là gì?

- DOM = Document Object Model  
- Là cấu trúc dạng cây của HTML

## 1.4 Ví dụ Element

```html
<option value="usa">United States</option>
```

## 1.5 Thẻ tự đóng

```html
<img src="image.jpg" />
<br />
<hr />
```

## 1.6 Attribute

```html
<option value="usa" school="HN">United States</option>
```

---

# 🎯 2. Selector

## 2.1 Selector là gì?

Automation = tương tác với element:
- Click
- Fill
- Select
- Upload

## 2.2 Các loại selector

### 🥇 Playwright Selector

```js
page.getByText('Add to cart');
page.getByRole('button', { name: 'Login' });
page.getByLabel('Email');
```

### 🥈 CSS Selector

```css
#email
.add-to-cart
input[name="password"]
```

### 🥉 XPath

```xpath
//button[normalize-space()='Add to cart']
```

---

# 🧪 3. Playwright Basic Syntax

## 3.1 Test

```js
import { test } from '@playwright/test';

test('Login test', async ({ page }) => {
});
```

## 3.2 Step

```js
await test.step('Login step', async () => {
});
```

## 3.3 Navigate

```js
await page.goto('https://pw-practice.playwrightvn.com/');
```

## 3.4 Locate

```js
const email = page.locator("//input[@id='email']");
```

## 3.5 Click

```js
await page.locator('//button').click();
```

## 3.6 Input

```js
await page.locator('//input').fill('Playwright Viet Nam');
```

## 3.7 Checkbox

```js
await page.locator('//input').check();
```

## 3.8 Dropdown

```js
await page.locator('//select').selectOption({ label: 'USA' });
```

## 3.9 Upload

```js
await page.locator('//input').setInputFiles('file.png');
```

---

