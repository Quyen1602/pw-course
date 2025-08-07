
#  JavaScript 

##  In ra "Hello World"

```javascript
console.log("Hello World");
```

>  Format code nhanh: `Option + Shift + F` (trên Mac)

---

##  Biến trong JavaScript

### Khai báo biến

```javascript
var firstname = "Quyen";
var lastname = "Nguyen";
console.log(firstname + "." + lastname);
```

### Khác nhau giữa `var` và `let`

```javascript
var firstname = "Xu";   // Có thể khai báo lại
let age = "23";         // Không thể khai báo lại trong cùng scope
console.log(firstname + " " + age);
```

### Hằng số: `const`

```javascript
const name = "my my";
const ages = 22;
```

> Ghi nhớ:
> - `var` / `let`: Dùng cho biến có thể thay đổi
> - `const`: Biến không thay đổi
> - Hạn chế dùng `var`, ưu tiên `let` và `const`

---

##  Kiểu Dữ Liệu (Data Types)

```javascript
const address = "quyen";          // String
const number = 12;                // Number
const isDisplayed = false;        // Boolean

const myname = "haha";
const isLearningPlaywright = true;
const price = 200;

// Các kiểu khác:
// - BigInt
// - Undefined
// - Null
// - Symbol
// - Object
```

---

##  Toán tử So sánh (Comparison Operators)

> Trả về kết quả `true` hoặc `false`

```javascript
const a = 10;
const b = 11;

const result = a > b;
console.log(result);
```

### Các loại toán tử:
- Lớn hơn, nhỏ hơn: `>`, `<`
- So sánh bằng: `==`, `===`
- So sánh khác: `!=`, `!==`
- So sánh lớn hơn hoặc bằng: `>=`, `<=`

> 🔸 `===` → So sánh cả **giá trị** và **kiểu dữ liệu**  
> 🔹 `==` → Chỉ so sánh **giá trị**

---

##  Toán tử một ngôi (Unary Operators)

> Dùng để tăng/giảm giá trị của biến

```javascript
let i3 = 10;
i3 = i3 + 1;
i3++;
console.log(i3); // 12

let i1 = 10;
i1 = i1 - 1;
i1--;
console.log(i1); // 8
```

---

##  Toán tử số học (Arithmetic Operators)

```javascript
+   // Cộng
-   // Trừ
*   // Nhân
/   // Chia
```

---

##  Câu lệnh điều kiện (Conditional Statement)

```javascript
if (5 < 9) {
    console.log("tao lao");
}
```

---

##  Vòng lặp (Loops)

```javascript
for (let i = 1; i < 8; i++) {
    console.log(i); 
}
```
##  Naming Conventions
```js
// snake_case_now_now: chưa dùng
// kebab-case-now-now: tên file
// camelCaseNowNow: tên biến
// PascalCase: tên class
```

##  Console Logs
```js
const a = 10;
console.log(`giá trị của biến a là ${a}`);
console.log("toi là bien " + a);

const name = "quyen";
const classed = "K2";
console.log(name + " " + classed);
```

##  Object
```js
let students = {
    age: 20,
    country: "VN"
};

console.log(students);
console.log(students.country);

students.age = 20;
console.log(students.age);

// Notes: nếu khai báo Object bằng const -> 
// có thể thay đổi giá trị của thuộc tính trong object 
// nhưng không thể thay đổi thuộc tính đó được
```

##  Logical Operators
```js
// &&: cả 2 vế của mệnh đề đều đúng 
// ||: một trong 2 vế đúng 
// ! : đảo ngược lại giá trị của mệnh đề

let c = true;
let b = false;

if (c && b) {
    console.log("runcode");
}

if (c || b) {
    console.log("runcode");
}

const newc = !c;
const newB = !!b;

console.log(newB);
console.log(newc);
```

##  Arrays
```js
const arr = [1, 2, 3, 4, 5];
const str = ["xu", "mimi", "thu"];
const mix = [1, "K11", {}, true];

console.log(str[1]);
console.log(str.length);

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
```

##  Functions
```js
function sayHello() {
    console.log("hello");
}
sayHello();

function saysay(h) {
    for (let i = 0; i < h; i++) {
        console.log("hello");
    }
}
saysay(15);

function getMax(m, n) {
    if (m > n) {
        return m;
    }
    return n;
    console.log("taolao"); // sẽ không chạy vì sau return
}

const max = getMax(5, 10);
console.log(max);
```