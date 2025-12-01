## GIT
## 1. Git Undo

#### Revert

```bash
git revert HEAD --no-edit
```

#### Reset theo commit hash

```bash
git reset <commit_hash>
```

#### Sửa message commit gần nhất

```bash
git commit --amend -m "<new commit message>"
```

### 2. Git branch
#### Tạo branch mới

```bash
git branch <new-branch>
```

#### Xem tất cả branch

```bash
git branch
```

#### Chuyển branch

```bash
git checkout <branch name>
```

#### Tạo và chuyển ngay sang branch

```bash
git checkout -b <branch name>
```

#### Xoá branch

```bash
git branch -d <branch name>
```

#### Gộp branch

```bash
git merge <branch name>
```

### 3 .gitignore

Dùng để **bỏ qua các file không cần theo dõi** (log, thư viện, file tạm...).  

```gitignore
Ignore file   <file_name>
Ignore folder <folder_name>
```
---

## Javascript

###  Naming Conventions
```js
// snake_case_now_now: chưa dùng
// kebab-case-now-now: tên file
// camelCaseNowNow: tên biến
// PascalCase: tên class
```

###  Console Logs
```js
const a = 10;
console.log(`giá trị của biến a là ${a}`);
console.log("toi là bien " + a);

const name = "quyen";
const classed = "K2";
console.log(name + " " + classed);
```

###  Object
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

###  Logical Operators
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

###  Arrays
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

###  Functions
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