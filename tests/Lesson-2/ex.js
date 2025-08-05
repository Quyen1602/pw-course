// ----- ex1------
const number = 12;
let name = "my number";
let isEven = false;

if (number %2 === 0) {
    console.log (!isEven)
}

// ------ ex2-------
let myName = "Alex";
myName = "Nagi";

console.log (myName)


// ------ ex3 ------
let Number 
if (Number > 0 ) {
    console.log (" Giá trị bạn nhập là số dương")
}
else if (Number <0) {
    console.log ("Giá trị bạn nhập là số âm")
}
else {
    console.log("giá trị bạn nhập là số 0")
}

//---------ex4-------
let higher = 170;
let sole = higher % 100;
let can = sole * 9 / 10;
let maxcan = sole - 100;
let mincan = sole * 8 / 10;
console.log ( `Cân nặng lý tưởng: ${can} kg, Cân nặng tối đa: ${maxcan} kg, Cân nặng tối thiểu: ${mincan} kg`)


//-------ex5--------
 for (let i =1 ; i < 100; i++ ){
    if (i % 2 == 0 ) {
        console.log (" so i là so chẵn ", i)
    }
    else {
        console.log ("so i là so le", i )
    }
 }

 //------ex6--------<
 for (let y = 12 ; y < 31 ; y++) {
    console.log("gia trị ", y)
 }


// -------ex7------
 for (let z = 1002; z <= 2000; z += 3) {
    console.log("Giá trị chia hết cho 3:", z);
}

//-------ex8-------
for (let a = 1; a < 100; a += 4) {
    console.log("Giá trị cach nhau 4:", a);
}

//-------ex9--------
for (let b = 25; b >= 12; b --){
    console.log(b)
}