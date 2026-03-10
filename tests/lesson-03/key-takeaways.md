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

---


###  Naming Conventions
```js
// snake_case_now_now: chưa dùng
// kebab-case-now-now: tên file
// camelCaseNowNow: tên biến
// PascalCase: tên class
```

---

###  Console Logs
```js
const a = 10;
console.log(`giá trị của biến a là ${a}`);
console.log("toi là bien " + a);

const name = "quyen";
const classed = "K2";
console.log(name + " " + classed);
```


