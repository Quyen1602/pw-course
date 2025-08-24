// Sử dụng vòng lặp for...each để lặp qua các phần tử trong mảng và thực hiện các bài tập sau:
//------BT1------
const numbers = [1, 2, 3];
for (const number in numbers) {
  console.log("BT1",numbers[number]);//lấy giá trị trong mảng
//   console.log(number); Lấy vị trí trong mảng (index)
}

//------BT2------
const numbers2 = [1, 2, 3];
let max = -Infinity;
for (const number in numbers2) {
     max = Math.max(max, numbers2[number]);    
}
console.log("BT2",max);
function sumArray(arr) {
    let sum = 0;
    for (const index in arr) {
        sum += arr[index];
    }
    return sum; 
}
console.log("BT2: Tổng:", sumArray(numbers2));

//------BT3------
const nhandoi = [1, 2, 3, 4, 5];
function doubleArray(arr) { 
    let doubled = [];
    for (const index in arr) {
        doubled.push(arr[index] * 2);
    }
    return doubled; 
}
console.log("BT3: Nhân đôi:", doubleArray(nhandoi));

//------BT1 Dùng forEach------
const numbers3 = [1, 2, 3];
numbers3.forEach(element => {
    console.log("BT1 forEach",element);
});

//------BT2 Dùng forEach------
const numbers4 = [1, 2, 3];
let max2 = -Infinity;
numbers4.forEach(element => {
    max2 = Math.max(max2, element);    
});
console.log("BT2 forEach",max2);

let sum2 = 0;
numbers4.forEach(element => {
    sum2 += element;
});
console.log("BT2 forEach: Tổng:", sum2);
 
//------BT3 Dùng forEach------
const nhandoi2 = [1, 2, 3, 4, 5];
let doubled2 = [];
nhandoi2.forEach(element => {
    doubled2.push(element * 2);
});
console.log("BT3 forEach: Nhân đôi:", doubled2);

//-------BTVN---------
// Sử dụng vòng lặp for...in để lặp qua các phần tử trong mảng và thực hiện các bài tập sau:
const students = {
    name : "Alex",
    age : 10,
    salary: 20
}

//BT1
for (let value in students){
    console.log(`BT1: ${value} : ${students[value]}`)
}
//BT2
sum = 0;
for (let key in students){
    if (typeof students[key] === 'number'){
        sum +=  students[key]
        console.log("BT2: ", sum)       
    }
}
//BT3
const newStudents = []
for (let key in students){
    newStudents.push(key);  
}
console.log("BT3: ", newStudents)

// Sử dụng vòng lặp for...of để lặp qua các phần tử trong mảng và thực hiện các bài tập sau:
//BT1
const arr = [1, 2, 3, 4, 3, 55, 23];
const target = 3;

let firstIndex = arr.indexOf(target);   // lấy ngay vị trí đầu tiên
let lastIndex;

for (const [i, v] of arr.entries()) if (v === target) lastIndex = i;

console.log("Vị trí đầu tiên:", firstIndex); // 2
console.log("Vị trí cuối cùng:", lastIndex); // 4

//BT2
const str = "Playwright";
const result = [];

for (const ch of str) {
  result.unshift(ch); 
}

console.log(result);

//BT3
const b = [1, 2, 3, 1, 2, 4, 5];
const freq = new Map();
for (const v of b) freq.set(v, (freq.get(v) || 0) + 1);

const uniques = b.filter(v => freq.get(v) === 1);
console.log(uniques); // [3, 4, 5]