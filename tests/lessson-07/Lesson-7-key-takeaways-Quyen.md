# Lesson 6 – DOM Relation & XPath Advanced (Automation Test)


## 1. DOM – Cấu trúc & quan hệ

DOM có thể hình dung như một **cây**:

- **Node gốc (root node)**: thường là `<html>`.
- **Node hiện tại (current node)**: node ta đang đứng (điểm bắt đầu) để viết XPath.
- **Node cần chú ý (target node)**: node muốn tìm.

### 1.1. Các loại quan hệ trong DOM

1. **self** – chính nó  
   Node hiện tại.

2. **parent** – cha  
   Node **phía trên trực tiếp** của node hiện tại.

3. **children** – con  
   Các node **phía dưới trực tiếp** của node hiện tại.

4. **ancestor** – tổ tiên  
   Bao gồm:
   - Cha
   - Ông (cha của cha)
   - Cụ (cha của ông)
   - ...

5. **descendant** – hậu duệ  
   Bao gồm:
   - Con
   - Cháu
   - Chắt
   - ... (tất cả cấp dưới)

6. **sibling** – anh em  
   Các node **cùng cấp** (có **cùng cha**).

7. **following** – theo sau  
   - Tất cả node nằm **bên phải / phía sau** node hiện tại trong document.
   - **Không bao gồm** các node là **con của node hiện tại**.

8. **preceding** – phía trước  
   - Tất cả node nằm **bên trái / phía trước** node hiện tại.
   - Không lấy các node là **ancestor** (tổ tiên).

9. **following-sibling** – anh em phía sau  
   - Là tập giao của `following` và `sibling`.
   - Tức là **các node cùng cha, cùng cấp, đứng sau** node hiện tại.

10. **preceding-sibling** – anh em phía trước  
    - Là tập giao của `preceding` và `sibling`.
    - Tức là **các node cùng cha, cùng cấp, đứng trước** node hiện tại.

---

## 2. Tổng quan XPath Axes

**XPath axes methods (trục XPath)**:  
Là các cách điều hướng trong DOM dựa trên quan hệ giữa các node.

Một số axes quan trọng:

- `parent`
- `child`
- `ancestor`
- `descendant`
- `following`
- `preceding`
- `following-sibling`
- `preceding-sibling`
- `self`
- `ancestor-or-self`
- `descendant-or-self`

**Cú pháp tổng quát:**

```xpath
//tag/axis::tagname[@attr='value']
```

**Ví dụ:**

```xpath
//div[@id='container']/child::button[@type='submit']
```

---

## 3. Wildcard trong XPath – `*`

Wildcard `*` nghĩa là **khớp mọi loại thẻ**.

### 3.1. Ví dụ cơ bản

```xpath
//div          # Tìm tất cả thẻ <div>
//*            # Tìm tất cả các loại thẻ
//div/*        # Tất cả con trực tiếp của mọi <div>
//*[@id]       # Tất cả element có thuộc tính id
```

### 3.2. Ví dụ với form test case

```html
<div class="form-group">
  <label for="testType">Testing Type:</label>
  <select id="testType" name="testType">
    <option value="blackbox">Black Box Testing</option>
    <option value="whitebox">White Box Testing</option>
    <option value="integration">Integration Testing</option>
    <option value="regression">Regression Testing</option>
  </select>
</div>
```

Một số XPath:

```xpath
//div[@class='form-group']/*     # label + select
//select/*                       # tất cả option bên trong select
```

> 💡 **Note:** Wildcard rất mạnh nhưng dễ match quá nhiều element. Chỉ nên dùng khi:
> - Đang **debug / khám phá DOM**.
> - Kết hợp với điều kiện khác (thuộc tính, text...) để thu hẹp kết quả.

---

## 4. Thực hành XPath Axes với ví dụ

Dùng ví dụ form:

```html
<form id="test-form" action="/submit" method="post">
  <div class="form-group">
    <label for="testName">Test Case Name:</label>
    <input type="text" id="testName" name="testName" placeholder="Enter test name">
  </div>

  <div class="form-group">
    <label for="testType">Testing Type:</label>
    <select id="testType" name="testType">
      <option value="blackbox">Black Box Testing</option>
      <option value="whitebox">White Box Testing</option>
      <option value="integration">Integration Testing</option>
      <option value="regression">Regression Testing</option>
    </select>
  </div>

  <div class="form-group">
    <label for="priority">Priority:</label>
    <input type="text" id="priority" name="priority">
  </div>

  <button type="submit" class="btn-submit">Create Test Case</button>
  <button type="reset" class="btn-reset">Reset Form</button>
</form>
```

### 4.1. `child` – Con trực tiếp

```xpath
//form[@id='test-form']/child::button
```

- **Ý nghĩa:** Tìm tất cả `<button>` là **con trực tiếp** của `<form id="test-form">`.
- **Kết quả:**  
  - `button.btn-submit` – "Create Test Case"  
  - `button.btn-reset` – "Reset Form"

```xpath
//form[@id='test-form']/child::div
```

- **Ý nghĩa:** Tìm tất cả `<div>` con trực tiếp của `<form id='test-form'>`.
- **Kết quả:** 3 thẻ `<div class="form-group">`.

> 💡 **Note:** `child::` chỉ lấy **con trực tiếp**, không lấy cháu, chắt,...

---

### 4.2. `descendant` – Tất cả con cháu

```xpath
//form[@id='test-form']/descendant::input
```

- **Ý nghĩa:** Tìm tất cả `<input>` **bên trong** thẻ `<form id='test-form'>` ở **mọi cấp**.
- **Kết quả:**
  - `input#testName`
  - `input#priority`

#### So sánh `child` vs `descendant`

- `child::input`: chỉ lấy `<input>` **ngay dưới** form (không có trong ví dụ).
- `descendant::input`: lấy cả **input nằm trong div**, sâu bao nhiêu cấp cũng được.

> ⚠️ **Note:** Dùng `descendant::` có thể trả về rất nhiều node.  
> Nên kết hợp thêm điều kiện (`@id`, `@name`, `contains()`...) để tối ưu.

---

### 4.3. `parent` – Tìm cha

Ví dụ: từ button “Create Test Case”, tìm form cha:

```xpath
//button[text()='Create Test Case']/parent::form
```

- **Ý nghĩa:** Từ `<button>` có text *Create Test Case* tìm node cha là `<form>`.
- **Kết quả:** `<form id="test-form">...</form>`

> 💡 **Note:**  
> - Khi DOM phức tạp, có thể **đi từ con lên cha** để định vị phần tử lớn hơn (section, form, card...).
> - Rất hữu ích khi **element con có text rõ ràng**, còn cha thì không có id/class dễ dùng.

---

### 4.4. `ancestor` – Tìm tổ tiên

Ví dụ với bảng test (giả sử):

```html
<table id="test-table">
  <tr>
    <td>TC001</td>
    <td>Login Validation</td>
    <td><button class="btn-edit">Edit</button></td>
  </tr>
</table>
```

```xpath
//button[@class='btn-edit']/ancestor::table
```

- **Ý nghĩa:** Từ button `btn-edit`, tìm **bất kỳ ancestor** nào có tag là `<table>`.
- **Kết quả:** `<table id="test-table">...</table>`

> 💡 **Note:**  
> - `ancestor::` thường dùng để **đi từ element nhỏ đến container lớn** (row → table, item → list, field → form).
> - Có thể dùng kèm điều kiện:
>   ```xpath
>   //button[@class='btn-edit']/ancestor::table[@id='test-table']
>   ```

---

### 4.5. `following-sibling` – Anh em phía sau

Ví dụ 1: từ `label` đến `input` cùng cấp:

```xpath
//label[@for='testName']/following-sibling::input
```

- **Ý nghĩa:** Từ `<label for="testName">`, tìm `input` **cùng cha**, đứng **sau** nó.
- **Kết quả:** `<input id="testName" ...>`

Ví dụ 2: trong một `<tr>`:

```html
<tr>
  <td>Login Validation</td>
  <td>Regression</td>
  <td>High</td>
  <td>Passed</td>
  <td>...</td>
</tr>
```

```xpath
//td[text()='Login Validation']/following-sibling::td
```

- **Ý nghĩa:** Từ cell có text “Login Validation”, lấy **tất cả cột phía sau** trong cùng hàng.
- **Kết quả:** các cột: Type, Priority, Status, Actions.

> 💡 **Note:**  
> - Dùng rất nhiều trong **table, list, menu** khi bạn biết 1 cell/label, muốn lấy các cột/field đi kèm.

---

### 4.6. `preceding-sibling` – Anh em đứng trước

```xpath
//button[@class='btn-reset']/preceding-sibling::button
```

- **Ý nghĩa:** Từ button `btn-reset`, tìm button **cùng cha**, đứng **trước** nó.
- **Kết quả:** button "Create Test Case".

> 💡 **Note:**  
> - Hữu ích khi bạn chỉ có locator tốt cho element “sau”, nhưng lại cần element “trước”.

---

### 4.7. `following` – Tất cả node sau trong document

Giả sử có:

```html
<h2>Test Cases List</h2>
<table>
  <!-- mỗi row có một button Run Test -->
  <tr><td><button class="btn-run">Run Test</button></td></tr>
  ...
</table>
```

```xpath
//h2[text()='Test Cases List']/following::button[@class='btn-run']
```

- **Ý nghĩa:** Từ `<h2>` có text “Test Cases List”, lấy **tất cả button.btn-run xuất hiện sau nó trong document**.
- **Kết quả:** Toàn bộ các button "Run Test" trong bảng.

> ⚠️ **Note:**  
> - `following::` là **rất rộng** – quét mọi node phía sau trong toàn document, không chỉ trong một section cụ thể.  
> - Nên kết hợp nhiều điều kiện để giới hạn phạm vi nếu có thể.

---

### 4.8. `ancestor-or-self`

```xpath
//table[@id='test-table']/ancestor-or-self::span[contains(@class, 'status')]
```

- **Ý nghĩa (về lý thuyết):** Từ `<table id='test-table'>`, lấy tất cả `span` là **tổ tiên hoặc chính nó** nếu là `span` và có chứa `class='status'`.
- Thực tế ví dụ trong slide muốn minh họa pattern `*-or-self` – thường dùng nhiều với `descendant-or-self`.

> 💡 **Note:**  
> - `ancestor-or-self` hữu ích khi bạn:
>   - Bắt đầu từ một node và muốn xét **cả node đó và tổ tiên** của nó.
>   - Thường gặp trong XPath phức tạp (XML, XSLT...).

---

### 4.9. `preceding` – Tất cả node trước

Giả sử:

```html
<table id="test-table">
  <!-- Các dòng chứa priority "High" -->
</table>

<h2>Test Execution Results</h2>
```

```xpath
//h2[text()='Test Execution Results']/preceding::td[@class='priority-high']
```

- **Ý nghĩa:** Từ h2 “Test Execution Results”, lấy mọi `<td class="priority-high">` **xuất hiện trước đó** trong document.
- **Kết quả:** Các cell priority “High”, ví dụ TC001, TC003.

> ⚠️ **Note:**  
> - Tương tự `following`, `preceding` cũng quét rất rộng – cần dùng cẩn thận để tránh locator không ổn định.

---

### 4.10. `descendant-or-self`

```xpath
//table[@id='test-table']/descendant-or-self::span[contains(@class, 'status')]
```

- **Ý nghĩa:** Lấy:
  - Chính node hiện tại (nếu là `<span ...>` có class chứa `status`), **và**
  - Tất cả `span` con cháu của nó có class chứa `status`.
- **Kết quả:** Tất cả `span` như `status-passed`, `status-running`, `status-failed`, `status-pending`.

> 💡 **Note:**  
> - Dùng nhiều khi bạn muốn gom cả **container** và **children** nếu chúng có cùng đặc điểm.

---

## 5. Chọn theo thuộc tính & logic (AND/OR)

### 5.1. Chọn theo thuộc tính – `@attribute`

Cú pháp cơ bản:

```xpath
//tagname[@attribute='value']
```

**Ví dụ:**

```xpath
//input[@id='testName']
//button[@class='btn-submit']
//a[@href='/login']
```

> 💡 **Note:**  
> - Thuộc tính thường dùng:
>   - `id`, `class`, `name`, `type`, `href`, `data-*`, ...
> - Nếu `class` có nhiều giá trị, dùng `contains()` (xem bên dưới).

---

### 5.2. Toán tử `AND` & `OR`

- **AND**: tất cả điều kiện phải đúng.
- **OR**: ít nhất một điều kiện đúng.

**Ví dụ AND:**

```xpath
//input[@type='text' and @name='testName']
//button[@type='submit' and contains(@class, 'btn-submit')]
```

**Ví dụ OR:**

```xpath
//button[@type='submit' or @type='button']
//input[@id='priority' or @name='priority']
```

**Kết hợp:**

```xpath
//input[
  (@type='text' or @type='search')
  and @name='keyword'
]
```

> 💡 **Note:**  
> - Nên dùng ngoặc `()` khi mix AND & OR để rõ ràng logic.
> - Thực tế automation test hay dùng:
>   - AND để **siết chặt** locator.
>   - OR để **dự phòng** khi có 2 case UI khác nhau.

---

## 6. Làm việc với text: `text()` & `normalize-space()`

### 6.1. `text()` – Lấy text node trực tiếp

```xpath
//element[text()='exact text']
```

**Ví dụ:**

```xpath
//button[text()='Create Test Case']
//h2[text()='Test Cases List']
```

> ⚠️ **Note:**  
> - `text()` khớp **chính xác** nội dung text (kể cả khoảng trắng).
> - Nếu có khoảng trắng thừa, xuống dòng, hoặc text bị bao bởi tag con, có thể không match.

---

### 6.2. `normalize-space()` – Chuẩn hóa khoảng trắng

```xpath
normalize-space(string)
```

- Xóa khoảng trắng:
  - Thừa **ở đầu**.
  - Thừa **ở cuối**.
  - Chuẩn hóa khoảng trắng ở giữa (gộp nhiều space thành 1).

**Ví dụ dùng với XPath:**

```xpath
//button[normalize-space(text())='Create Test Case']
//h2[normalize-space(.)='Test Cases List']
```

> 💡 **Note:**  
> - `normalize-space(.)` thường đáng tin cậy hơn `text()` trong trường hợp:
>   - Có nhiều khoảng trắng.
>   - Có tag con xen giữa text.
> - Dùng nhiều trong UI có format HTML phức tạp (xuống dòng, indent...).

---

## 7. `contains()` – Kiểm tra chuỗi con

Dùng khi:

- Không muốn/không thể match **chính xác** toàn bộ chuỗi.
- Chỉ cần biết **chứa** 1 phần text hoặc 1 phần giá trị thuộc tính.

### 7.1. `contains()` với attribute

```xpath
//element[contains(@attribute, 'substring')]
```

**Ví dụ:**

```xpath
//div[contains(@class, 'form-group')]
//button[contains(@class, 'btn-')]         # match btn-submit, btn-reset, ...
//a[contains(@href, 'login')]
```

> 💡 **Note:**  
> - Rất phổ biến với `class` vì nhiều class được gộp chung: `"btn btn-primary btn-login"`.

---

### 7.2. `contains()` với text

```xpath
//element[contains(text(), 'substring')]
```

**Ví dụ:**

```xpath
//button[contains(text(), 'Create')]       # match "Create Test Case", "Create"
//h2[contains(text(), 'Test Cases')]       # match "Test Cases List"
```

> ⚠️ **Note:**  
> - `contains(text(), ...)` chỉ xét **text node trực tiếp**.  
>   Nếu trong element có tag con, đôi khi `.` sẽ an toàn hơn:
>   ```xpath
>   //div[contains(normalize-space(.), 'Test Cases')]
>   ```

---

## 8. Tổng hợp cú pháp XPath axes

Các axes chính:

- `parent`
- `child`
- `ancestor`
- `descendant`
- `following`
- `preceding`
- `following-sibling`
- `preceding-sibling`
- `self`
- `ancestor-or-self`
- `descendant-or-self`

Cú pháp mẫu:

```xpath
//tag/axis::tagname[@attr='value']
```

Ví dụ tổng hợp:

```xpath
//form[@id='test-form']/descendant::input[@name='priority']
//label[@for='testType']/following-sibling::select
//td[text()='Login Validation']/following-sibling::td[contains(@class, 'priority')]
//button[contains(text(), 'Reset')]/parent::form
```

---


## 9. Ghi chú học tập (Notes)

- **Khi nào dùng axes?**
  - DOM không có id/class rõ ràng.
  - Cấu trúc dạng bảng, danh sách, form có label–field cặp với nhau.
  - Muốn viết locator **ổn định theo quan hệ** thay vì phụ thuộc vị trí index.

- **Kinh nghiệm thực tế:**
  - Bắt đầu locator từ **text/label ổn định**, sau đó dùng:
    - `following-sibling` để tìm input, dropdown, button cùng dòng.
    - `ancestor` để tìm row, card, form chứa nó.
  - Ưu tiên:
    - `id` → `data-*` attribute → `name` → `class` → text.
  - Chỉ dùng `following`, `preceding` khi **không còn cách nào** khác ổn định hơn.

---


## 11. Kiến thức đọc thêm – XPath functions

### 11.1. Bảng tổng hợp các hàm XPath

| Function          | Cú pháp                                | Mô tả                                      | Ví dụ                                                        |
|-------------------|-----------------------------------------|--------------------------------------------|--------------------------------------------------------------|
| `concat()`        | `concat(str1, str2, ...)`              | Nối các chuỗi lại với nhau                 | `concat('Hello', ' ', 'World')` → `"Hello World"`           |
| `starts-with()`   | `starts-with(str, prefix)`             | Kiểm tra chuỗi bắt đầu bằng `prefix`       | `//input[starts-with(@id, 'user')]`                         |
| `contains()`      | `contains(str, substring)`             | Kiểm tra chuỗi chứa `substring`            | `//div[contains(@class, 'active')]`                         |
| `string-length()` | `string-length(str?)`                  | Trả về độ dài chuỗi                        | `string-length('Hello')` → `5`                              |
| `normalize-space()` | `normalize-space(str?)`              | Loại bỏ khoảng trắng thừa                  | `normalize-space(' Hello World ')` → `"Hello World"`        |
| `translate()`     | `translate(str, from, to)`             | Thay thế ký tự trong chuỗi                 | `translate('abc', 'ab', 'AB')` → `"ABc"`                    |
| `lower-case()`    | `lower-case(string)`                   | Chuyển chuỗi thành chữ thường              | `lower-case('HELLO')` → `"hello"`                           |
| `upper-case()`    | `upper-case(string)`                   | Chuyển chuỗi thành chữ HOA                 | `upper-case('hello')` → `"HELLO"`                           |
| `replace()`       | `replace(str, pattern, replacement)`   | Thay thế theo regex                        | `replace('hello', 'l', 'L')` → `"heLLo"`                    |
| `tokenize()`      | `tokenize(str, pattern)`               | Tách chuỗi theo `pattern`                  | `tokenize('a,b,c', ',')` → `('a','b','c')`                  |
| `ends-with()`     | `ends-with(str, suffix)`               | Kiểm tra chuỗi kết thúc bằng `suffix`      | `ends-with('hello.txt', '.txt')` → `true`                   |

> 📝 **Notes quan trọng về function:**
> - Khi viết XPath cho UI test (Selenium / Playwright), bạn dùng nhiều nhất:  
>   `contains()`, `starts-with()`, `normalize-space()`, `string-length()`.
> - `concat()` hay dùng khi trong XPath cần chứa dấu `'` và `"` cùng lúc.
> - `translate()` hữu ích khi cần **so sánh không phân biệt hoa thường**, ví dụ:
>   ```xpath
>   //a[translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'login']
>   ```
> - `replace()` và `tokenize()` mang tính “XML/XPath 2.0+” – một số engine không hỗ trợ đầy đủ.

---

## 12. XPath axes

### 12.1. Bảng tổng hợp trục (axes)

| Axis                 | Cú pháp                          | Mô tả                                      | Ví dụ                              | Kết quả / Ý nghĩa                                                                 |
|----------------------|----------------------------------|--------------------------------------------|------------------------------------|------------------------------------------------------------------------------------|
| `child`              | `child::node`                   | Chọn tất cả node con trực tiếp             | `//div/child::p`                   | Tất cả `<p>` là con trực tiếp của `<div>`                                         |
| `descendant`         | `descendant::node`              | Chọn tất cả node con cháu (mọi cấp)        | `//div/descendant::span`          | Tất cả `<span>` bên trong `<div>` ở bất kỳ cấp nào                                |
| `parent`             | `parent::node`                  | Chọn node cha trực tiếp                    | `//p/parent::div`                 | Thẻ `<div>` là cha trực tiếp của `<p>`                                             |
| `ancestor`           | `ancestor::node`                | Chọn tất cả node tổ tiên (cha, ông, ...)   | `//span/ancestor::div`            | Tất cả `<div>` là tổ tiên (cha, ông, ...) của `<span>`                             |
| `following-sibling`  | `following-sibling::node`       | Chọn các node anh em đứng sau (cùng cấp)   | `//h2/following-sibling::p`       | Tất cả `<p>` đứng sau `<h2>` và cùng cha                                          |
| `preceding-sibling`  | `preceding-sibling::node`       | Chọn các node anh em đứng trước (cùng cấp) | `//h3/preceding-sibling::h2`      | Tất cả `<h2>` đứng trước `<h3>` và cùng cha                                       |
| `following`          | `following::node`               | Chọn tất cả node sau trong document        | `//h1/following::p`               | Tất cả `<p>` xuất hiện sau `<h1>` trong **toàn bộ** document                      |
| `preceding`          | `preceding::node`               | Chọn tất cả node trước trong document      | `//footer/preceding::div`         | Tất cả `<div>` xuất hiện trước `<footer>` trong **toàn bộ** document              |
| `attribute`          | `attribute::name` hoặc `@name`  | Chọn thuộc tính của node                   | `//div/attribute::class` hoặc `//div/@class` | Thuộc tính `class` của `<div>`                                         |
| `self`               | `self::node`                    | Chọn chính node hiện tại                   | `//p/self::p`                     | Chính node `<p>` đó                                                                |
| `descendant-or-self` | `descendant-or-self::node`      | Node hiện tại + tất cả con cháu            | `//div/descendant-or-self::*`    | `<div>` và tất cả node bên trong nó                                               |
| `ancestor-or-self`   | `ancestor-or-self::node`        | Node hiện tại + tất cả tổ tiên             | `//span/ancestor-or-self::div`   | `<span>` và tất cả `<div>` là tổ tiên của nó (nếu `<span>` cũng là `<div>` thì tính cả) |
| `namespace`          | `namespace::prefix`             | Chọn namespace nodes (ít dùng trong UI)    | `//element/namespace::*`         | Tất cả namespace của `element`                                                     |

---

## 13. Ví dụ chi tiết với HTML mẫu

```html
<body>
  <header id="top">
    <h1>Tiêu đề chính</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <h2 id="title1">Bài viết 1</h2>
      <p class="intro">Đoạn giới thiệu</p>
      <p class="content">Nội dung 1</p>
      <div class="comments">
        <span class="author">Tác giả</span>
        <span class="date">01/01/2024</span>
      </div>
    </article>

    <article>
      <h2 id="title2">Bài viết 2</h2>
      <p class="intro">Giới thiệu 2</p>
      <p class="content">Nội dung 2</p>
    </article>
  </main>

  <footer>
    <p>Copyright 2025</p>
  </footer>
</body>
```

---

## 14. Bảng ví dụ thực tế với XPath

| XPath Expression                                               | Kết quả                                                       | Giải thích                                      |
|----------------------------------------------------------------|---------------------------------------------------------------|-------------------------------------------------|
| `//h2[@id='title1']/parent::article`                          | Thẻ `<article>` chứa “Bài viết 1”                            | Chọn cha của `h2`                               |
| `//article/child::p`                                          | Tất cả `<p>` con trực tiếp của mỗi `<article>`               | Chỉ lấy `<p>` cấp 1, không lấy `<p>` trong `div` |
| `//article/descendant::span`                                  | `<span class="author">` và `<span class="date">`             | Tất cả `span` bên trong `article` ở mọi cấp     |
| `//h2[@id='title1']/following-sibling::p`                     | `<p class="intro">` và `<p class="content">` của bài 1       | Các `p` anh em đứng sau `h2` trong cùng `article` |
| `//p[@class='content']/preceding-sibling::p`                  | `<p class="intro">`                                          | `p` anh em đứng trước                           |
| `//span[@class='author']/ancestor::article`                   | `<article>` chứa `span.author`                               | Article là tổ tiên của span                      |
| `//h2[@id='title1']/following::article`                       | `<article>` chứa “Bài viết 2”                                | `article` xuất hiện sau `h2` trong document     |
| `//footer/preceding::h2`                                      | Cả 2 thẻ `<h2>` (“Bài viết 1” và “Bài viết 2”)              | Tất cả `h2` xuất hiện trước `footer`           |
| `//nav/child::a`                                              | 2 thẻ `<a>` trong `nav`                                      | Các link trong navigation                      |
| `//span[@class='date']/parent::div/@class`                    | `"comments"`                                                 | Lấy giá trị thuộc tính `class` của `div` cha    |

> 📝 **Note:**  
> - Các ví dụ trên rất gần với thực tế khi locator cần “đi từ text/label” đến container hoặc phần tử liên quan (author, date, content…).

---

## 15. Bảng so sánh các axes tương tự (nhóm dễ nhầm)

### 15.1. Nhóm con cháu

- `child::`  
  → Chỉ **con trực tiếp** (cấp 1).

- `descendant::`  
  → Tất cả **con cháu** (mọi cấp dưới).

- `descendant-or-self::`  
  → Bao gồm **chính node hiện tại** + toàn bộ con cháu.

### 15.2. Nhóm tổ tiên

- `parent::`  
  → Chỉ **cha trực tiếp**.

- `ancestor::`  
  → Tất cả **tổ tiên** (cha, ông, cụ, ...).

- `ancestor-or-self::`  
  → Bao gồm **chính node hiện tại** + tất cả tổ tiên.

### 15.3. Nhóm anh em (cùng cấp)

- `following-sibling::`  
  → Anh em **sau** node hiện tại.

- `preceding-sibling::`  
  → Anh em **trước** node hiện tại.

### 15.4. Nhóm quét toàn document

- `following::`  
  → Tất cả node **sau** node hiện tại (mọi cấp, mọi nhánh).

- `preceding::`  
  → Tất cả node **trước** node hiện tại (mọi cấp, mọi nhánh).

> 💡 **Ghi nhớ nhanh:**
> - `*-sibling` → cùng cấp, cùng cha.  
> - Không có `sibling` → quét toàn document (rất rộng, cần cẩn thận).

---

## 16. Ví dụ kết hợp nhiều axes

Dưới đây là một số pattern XPath thường gặp trong thực tế khi làm test automation:

```xpath
// Tìm article, rồi lấy tất cả p con trực tiếp
//article/child::p
```

```xpath
// Từ span author, lên cha (div.comments), rồi lấy tất cả span con
//span[@class='author']/parent::div/child::span
```

```xpath
// Từ h2 đầu tiên (title1), lấy 2 p anh em sau nó
//h2[@id='title1']/following-sibling::p[position() <= 2]
```

```xpath
// Từ span date, lên article tổ tiên, rồi xuống lấy h2 (tiêu đề bài viết)
//span[@class='date']/ancestor::article/child::h2
```

```xpath
// Từ p intro, lấy tất cả element anh em sau (mọi tag)
//p[@class='intro']/following-sibling::*
```

```xpath
// Từ footer, lấy tất cả div đứng trước nó trong toàn document
//footer/preceding::div
```

```xpath
// Từ nav, lấy tất cả a con có href (thông thường a nào cũng có href)
//nav/child::a[@href]
```

```xpath
// Tìm article thứ 2, lấy article anh em trước nó (article thứ 1)
//article[2]/preceding-sibling::article
```
---

# Lesson 7 – Playwright Tests 
## 1. Test group / Test suite

| Chủ đề              | Ghi chú chính                                                                 | Ví dụ code ngắn |
|---------------------|-------------------------------------------------------------------------------|-----------------|
| Khái niệm           | **Test suite** = tập hợp nhiều **test case** trong cùng 1 nhóm.              |                 |
| Mục đích            | Nhóm test lại cho dễ quản lý, dễ đọc report, dễ apply chung hooks, config…  |                 |
| Cú pháp cơ bản      | Dùng `test.describe('<tên suite>', async () => { ... })`                     | ```ts<br>test.describe('My suite', async () => {<br>  test('test 1', async ({ page }) => {<br>    // code ...<br>  });<br><br>  test('test 2', async ({ page }) => {<br>    // code ...<br>  });<br>});<br>``` |
| Bên trong describe  | Có thể khai báo nhiều `test(...)`                                            |                 |
| Lợi ích thực tế     | - Gom các test liên quan 1 tính năng/module<br>- Dễ bật/tắt, chạy filter theo suite |                 |

### 💡 Kinh nghiệm thực tế 

- **Đặt tên suite theo business**, không theo kỹ thuật:  
  - Tốt: `describe('Checkout - Cart & Payment')`, `describe('User Management - Roles')`  
  - H���n chế: `describe('Tests for file X')`
- **Một suite không nên quá dài** (50+ test): khó đọc log và khó maintain. Tách theo luồng chính/phụ:  
  - `Checkout - Happy paths`  
  - `Checkout - Edge & Error handling`
- Suite nên **tự chạy được độc lập**, tránh việc suite A phụ thuộc suite B đã chạy trước → gây flaky trên CI.
- Dùng suite để **map 1-1 với feature/epic trong Jira** → dễ trace test ↔ requirement.

---

## 2. Hooks trong Playwright

| Khái niệm           | Ghi chú chính                                                                 |
|---------------------|-------------------------------------------------------------------------------|
| Hooks là gì         | Các hàm được gọi **trước / sau** khi chạy test hoặc cả suite.               |
| Thời điểm chạy test | `Trước khi chạy` → `Trong khi chạy` → `Sau khi chạy`                        |
| Thời điểm chạy suite| Tương tự nhưng ở **cấp suite** (bao quanh nhiều test)                        |
| Playwright gọi là   | **Hooks**: các điểm móc vòng đời test/suite.                                |

### 2.1. Các loại hooks

| Hook          | Mức áp dụng | Thời điểm chạy                                           | Ghi chú nhanh |
|---------------|------------|----------------------------------------------------------|---------------|
| `beforeAll`   | Suite      | Ch���y **một lần** trước **tất cả test** trong suite      | Setup chung (data, login 1 lần, mở server, …) |
| `afterAll`    | Suite      | Chạy **một lần** sau **tất cả test** trong suite        | Cleanup chung (đóng server, clear resource, …) |
| `beforeEach`  | Test       | Chạy **trước mỗi test case**                            | Setup lặp lại (mở page, vào URL, seed dữ liệu nhỏ) |
| `afterEach`   | Test       | Chạy **sau mỗi test case**                              | Teardown lặp lại (logout, xóa dữ liệu test, …) |

> Hình dung:  
> - `beforeAll` → Test 1 (beforeEach → test → afterEach) → Test 2 (beforeEach → test → afterEach) → … → `afterAll`

### 💡 Kinh nghiệm thực tế 

- **Đừng lạm dụng `beforeAll` để login cho tất cả test** nếu:
  - Mỗi test có thể thay đổi session (logout, đổi quyền…).
  - Test cần chạy song song (parallel) → dễ conflict session.  
  → Cách an toàn hơn: login nhẹ, nhanh trong `beforeEach` bằng API hoặc cookie.
- `beforeAll` phù hợp cho:
  - Start mock server, khởi tạo test data lớn, cấu hình environment.
- **Tránh logic phức tạp bên trong hook**:
  - Hook fail → cả suite fail, khó debug “test nào thật sự lỗi”.
  - Chỉ nên để **setup/teardown rõ ràng, ngắn gọn** (mở URL, clear storage, prepare dữ liệu).
- Ghi log rõ ràng trong hooks:
  - Ví dụ: `console.log('[beforeEach] Go to /login')` → sau này debug log trên CI rất hữu ích.
- Trong project lớn:
  - Tách **hooks chung** vào test fixture / base test file (ví dụ `test-base.ts`) để tránh copy-paste.

---

## 3. Assertion & Web-first assertion

### 3.1. Khái niệm chung

| Chủ đề              | Ghi chú chính                                                                 |
|---------------------|-------------------------------------------------------------------------------|
| Assertion là gì     | “Khẳng định / xác nhận” điều kiện có đúng như mong đợi hay không.           |
| Tại sao cần         | Không có assertion → không biết test pass hay fail, chỉ là “chạy hành động”. |
| Thư viện sử dụng   | `expect` (import từ `@playwright/test`).                                     |

**Ví dụ tổng hợp:**

```ts
import { test, expect } from '@playwright/test'; 

test("Test 01", async ({ page }) => {
  // Khẳng định rằng: title trang phải là "Homepage"
  await expect(page).toHaveTitle('Homepage');

  // Khẳng định rằng: button phải visible (nhìn thấy được)
  await expect(page.locator('button')).toBeVisible();

  // Khẳng định rằng: giá trị phải bằng 5
  expect(2 + 3).toBe(5);
});
```

### 3.2. So sánh có / không có assertion

| Không có Assertion                         | Có Assertion                                                     |
|-------------------------------------------|------------------------------------------------------------------|
| Chỉ thực hiện hành động                   | Thực hiện hành động **và** kiểm tra kết quả                     |
| `await page.click('button')`              | `await expect(page.locator('button')).toBeVisible()`            |
| “Tôi click nút”                           | “Tôi kiểm tra xem nút có hiển thị như mong đợi hay không”       |

### 💡 Kinh nghiệm thực tế 

- Mỗi test nên có **ít nhất 1 assertion “chính”** phản ánh mục tiêu business của test:
  - Ví dụ: *“Order thành công”* → có toast “Order success” **và** dòng mới trong Order history.
- **Đừng assert quá chi tiết UI không quan trọng** (màu, pixel, text phụ…) trừ khi đó là requirement → sẽ làm test rất fragile.
- Khi viết assertion, hãy tự hỏi:  
  “Nếu điều này fail, QA/dev có hiểu ngay **vì sao business fail** không?”
- Đặt **message rõ ràng** khi dùng generic expect (nếu cần):  
  ```ts
  expect(total).toBe(3); // có thể kèm comment: // 3 items phải được thêm vào cart
  ```

---

## 4. Các loại assertion trong Playwright

### 4.1. Generic Assertions (expect giá trị thường)

| Loại            | Ghi chú                              | Ví dụ                             |
|-----------------|--------------------------------------|-----------------------------------|
| So sánh bằng    | So sánh giá trị primitive           | `expect(value).toBe(expected);`   |
| Độ dài          | Kiểm tra độ dài array/string        | `expect(array).toHaveLength(3);`  |
| Chứa chuỗi      | Kiểm tra 1 chuỗi chứa chuỗi con     | `expect(string).toContain('text');` |

> Dùng cho **logic thuần JS/TS**, không liên quan DOM.

#### 💡 Kinh nghiệm thực tế (10 năm)

- Dùng generic assertions cho:
  - Hàm helper (validate format, tính tổng, xử lý data…).
  - Kiểm tra response từ API mock.
- Giữ **unit logic** (xử lý data) và **UI logic** (Playwright) tách riêng:
  - Dễ test, dễ debug, và khi UI đổi, phần xử lý data vẫn đảm bảo đúng.

---

### 4.2. Web-first Assertions (auto-waiting)

| Đặc điểm         | Ghi chú chính                                                                 |
|------------------|-------------------------------------------------------------------------------|
| Đối tượng        | Làm việc với **element trên web** (`locator`, `page`, …)                     |
| Auto-waiting     | Tự động **chờ** (trong timeout) đến khi điều kiện đúng, tránh flaky test     |
| Cú pháp          | `await expect(locator_or_page).toXxx(...)`                                   |

#### 4.2.1. Element State

| Mục đích              | Ví dụ                                                      |
|-----------------------|------------------------------------------------------------|
| Hiển thị / ẩn         | `await expect(locator).toBeVisible();`<br>`await expect(locator).toBeHidden();` |
| Enabled / Disabled    | `await expect(locator).toBeEnabled();`<br>`await expect(locator).toBeDisabled();` |
| Checkbox/Radio checked| `await expect(locator).toBeChecked();`                     |
| Focus                 | `await expect(locator).toBeFocused();`                     |

##### 💡 Kinh nghiệm thực tế

- Ưu tiên dùng `toBeVisible()` thay cho việc tự `waitForTimeout` → dùng sai pattern sẽ dẫn đến test chậm và không ổn định.
- Kiểm tra `toBeHidden()` thay vì `not.toBeVisible()` nếu UI thật sự remove/hide element đó.
- Với form:
  - Trước khi nhập liệu, có thể check `toBeEnabled()` cho các input quan trọng để tránh nhập vào field disabled.

---

#### 4.2.2. Text & Content

| Mục đích           | Ví dụ                                                      |
|--------------------|------------------------------------------------------------|
| Chứa text          | `await expect(locator).toContainText('Hello');`           |
| Text chính xác     | `await expect(locator).toHaveText('Welcome');`            |
| Regex text         | `await expect(locator).toHaveText(/welcome/i);`           |
| Nhiều elements     | `await expect(locator).toHaveText(['Item 1', 'Item 2']);` |

##### 💡 Kinh nghiệm thực tế

- Dùng **regex không phân biệt hoa thường** với UI đa ngôn ngữ / text hay thay đổi nhẹ:
  ```ts
  await expect(locator).toHaveText(/order created successfully/i);
  ```
- Khi UI render list động (Filter/Search), `toHaveText([ ... ])` rất hữu ích để validate **cả thứ tự**.
- Tránh assert full câu nếu team hay chỉnh wording →  
  chỉ assert keyword chính hoặc status code hiển thị (`"Success"`, `"Failed"`…).

---

#### 4.2.3. Attributes & Properties

| Mục đích           | Ví dụ                                                      |
|--------------------|------------------------------------------------------------|
| Attribute cụ thể   | `await expect(locator).toHaveAttribute('href', '/about');` |
| Class              | `await expect(locator).toHaveClass('active');`<br>`await expect(locator).toHaveClass(/btn-primary/);` |
| Value input        | `await expect(locator).toHaveValue('john@example.com');`   |
| Số lượng element   | `await expect(locator).toHaveCount(5);`                    |

##### 💡 Kinh nghiệm thực tế

- **`toHaveCount`** rất hay dùng để kiểm tra:
  - Số dòng trong bảng sau khi filter.
  - Số item trong cart sau khi add/remove.
- Với `class`, ưu tiên regex (`/active/`) hơn là match full `class="btn btn-primary active"` vì thứ tự class dễ thay đổi.
- Khi test form:
  - Sau khi save, dùng `toHaveValue` để xác nhận dữ liệu được lưu & hiển thị lại đúng.

---

#### 4.2.4. Page Assertions

| Mục đích      | Ví dụ                                                      |
|---------------|------------------------------------------------------------|
| URL           | `await expect(page).toHaveURL('https://example.com/');`<br>`await expect(page).toHaveURL(/.*checkout/);` |
| Title         | `await expect(page).toHaveTitle(/Playwright/);`            |

##### 💡 Kinh nghiệm thực tế

- `toHaveURL(/\/login/)` giúp test **bị redirect đúng page** khi chưa login.
- Với flow nhiều bước (wizard, checkout), URL assertion là cách nhanh nhất để:
  - Đảm bảo đang ở đúng step.
  - Dễ debug khi fail: chỉ cần nhìn URL trong log.

---

## 5. What’s next (lộ trình sau bài 7)

| Chủ đề tiếp theo     | Nội dung chính                            | Kinh nghiệm gợi ý học |
|----------------------|-------------------------------------------|------------------------|
| Git                  | `merge`, `rebase`, `squash`               | Hãy luyện trên repo cá nhân, tạo branch feature nhỏ và thử đủ 3 kiểu merge để hiểu log; sau này làm việc với team sẽ tự tin hơn. |
| Selector nâng cao    | CSS selector, Playwright selector         | Tập trung vào **locator ổn định**: tránh dùng index (`nth-child`) nếu không cần, ưu tiên `data-testid`, `role`, text ổn định. |

---

