# Ghi chú về các cách dùng vòng lặp trong JavaScript

## 1. for (cổ điển)

-   Dùng khi cần **kiểm soát chỉ số (index)** chặt chẽ.
-   Có thể dùng `break` và `continue`.

``` js
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
```

## 2. for...in

-   Duyệt **keys/index** của object hoặc array.
-   Thường dùng cho **object**.
-   Với array thì cho ra index, không phải value.

``` js
const obj = { name: "Alex", age: 20 };
for (const key in obj) {
  console.log(key, obj[key]);
}
```

## 3. for...of

-   Duyệt **values** của iterable (Array, String, Map, Set...).
-   Thường dùng khi chỉ quan tâm đến **giá trị**.
-   Có thể kết hợp `.entries()` để lấy cả index và value.

``` js
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}

// Với index
for (const [i, value] of arr.entries()) {
  console.log(i, value);
}
```

## 4. forEach()

-   Method có sẵn của Array.
-   Duyệt qua từng phần tử, callback nhận `value, index`.
-   Không `break/continue` được.

``` js
const arr = [10, 20, 30];
arr.forEach((value, index) => {
  console.log(index, value);
});
```

## 5. So sánh nhanh

 | Vòng lặp  | Trả về      | Dùng cho     | Ưu điểm                    | Nhược điểm                  |
|-----------|-------------|--------------|----------------------------|-----------------------------|
| for       | index+value | Array        | Linh hoạt, dừng sớm được   | Code dài                    |
| for...in  | key/index   | Object/Array | Tốt cho object             | Với array dễ nhầm (trả index) |
| for...of  | value       | Iterable     | Ngắn gọn, dễ hiểu          | Không trực tiếp lấy được index |
| forEach   | value+index | Array        | Clean, functional style    | Không break/continue        |
  ----------------------------------------------------------------------------

## 6. Khi nào dùng?

-   **Object** → `for...in`
-   **Array (cần value)** → `for...of`
-   **Array (cần index + value)** → `forEach` hoặc `for...of entries()`
-   **Cần break/continue** → `for` hoặc `for...of`
