// ----- ex1------
// ----- C1 -----
// const number = 12;
// let name = "my number";
// let isEven = false;

// if (number %2 === 0) {
//     isEven = !isEven
// }
// console.log (isEven)

// ----- C2 -----
 const number = 12;
 let name = "my number";
 let isEven = false;

isEven = (number %2 === 0) ? true : false;
console.log (isEven)


// ------ ex2-------
let myName = "Alex";
myName = "Nagi";
console.log(myName); 


// ------ ex3 ------
let a = 0;
let result = (a > 0) ? "Giá trị bạn nhập là số dương" : (a < 0) ? "Giá trị bạn nhập là số âm" : "Giá trị bạn nhập là số 0";

console.log(result);

//---------ex4-------
let higher = 170;
let sole = higher % 100;
let can = sole * 9 / 10;
let maxcan = sole;
let mincan = sole * 8 / 10;
console.log ( `Cân nặng lý tưởng: ${can} kg, Cân nặng tối đa: ${maxcan} kg, Cân nặng tối thiểu: ${mincan} kg`)

//-------ex5--------
for (let i = 1; i <= 100; i++) {
    console.log(`Số ${i} là số ${i % 2 === 0 ? 'chẵn' : 'lẻ'}`);
}

//------ex6--------<
 for (let i = 12; i <= 30; i++) {
    console.log(i);
}

// -------ex7------
 for (let z = 1002; z <= 2000; z += 3) {
    console.log("Giá trị chia hết cho 3:", z);
}

//-------ex8-------
for (let a = 1; a < 100; a += 4) {
    console.log(`Giá trị cách nhau 4: ${a}`);
}

//-------ex9--------
for (let b = 25; b >= 12; b--) {
    console.log(`Giá trị: ${b}`);
}


