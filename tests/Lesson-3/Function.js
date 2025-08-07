//---------BT1--------
function calculateBMI(height, weight) {
  const bmi = weight / (height * height); 
  if (bmi < 18.5) {
    return "Thiếu cân";
  } else if (bmi < 25) {
    return "Bình thường";
  } else if (bmi < 30) {
    return "Thừa cân";
  } else {
    return "Béo phì";
  }
}
const getBMI = calculateBMI(1.75, 49);
console.log(getBMI); 


//-------BT2---------
function convertTemperature(value, type) {
  if (type === 'C') {
    return value * 9 / 5 + 32; 
  } else if (type === 'F') {
    return (value - 32) * 5 / 9;  
  } else {
    return "Loại nhiệt độ không hợp lệ!"; 
  }
}

console.log(convertTemperature(10, 'C')) 
console.log(convertTemperature(50, 'F'))

//-----BT3--------
const numbers = [1, 2, 3, 4, 5];
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log("Tổng:", sumArray(numbers));

//------BT4------
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function filterPrimes(arr) {
  return arr.filter(isPrime);
}
console.log("Số nguyên tố:", filterPrimes(numbers));


//------BT5-------
let users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
];
function updateEmail(name, newEmail) {
  for (let user of users) {
    if (user.name === name) {
      user.email = newEmail;
    }
  }
}
updateEmail("Bob", "newbob@example.com");
console.log(users);


//-------BT6---------
const students = [
  { name: "Alex", score: 85 },
  { name: "John", score: 75 },
  { name: "Jane", score: 90 },
];
function averageScore(list) {
  let total = 0;
  for (let student of list) {
    total += student.score;
  }
  return total / list.length;
}
console.log("Điểm trung bình:", averageScore(students));

//--------BT7--------
const cart = [
  { name: "product 1", price: 100 },
  { name: "product 2", price: 50 },
];
function checkPrices(products) {
  return products.every(p => p.price > 0);
}
console.log("Tất cả giá > 0?", checkPrices(cart));

//-----BT8------
function isStoreOpen(hour) {
  if (hour >= 9 && hour < 21) {
    console.log("Cửa hàng đang mở");
  } else {
    console.log("Cửa hàng đã đóng");
  }
}
isStoreOpen(10); // test

//--------BT9---------
function ticketPrice(age) {
  if (age < 5) {
    console.log("Miễn phí");
  } else if (age >= 18) {
    console.log("100k");
  } else {
    console.log("50k");
  }
}
ticketPrice(4);
ticketPrice(10);
ticketPrice(20);

//-------BT10---------
function printMonth(month) {
  switch (month) {
    case 1: console.log("Tháng 1"); break;
    case 2: console.log("Tháng 2"); break;
    case 3: console.log("Tháng 3"); break;
    case 4: console.log("Tháng 4"); break;
    case 5: console.log("Tháng 5"); break;
    case 6: console.log("Tháng 6"); break;
    case 7: console.log("Tháng 7"); break;
    case 8: console.log("Tháng 8"); break;
    case 9: console.log("Tháng 9"); break;
    case 10: console.log("Tháng 10"); break;
    case 11: console.log("Tháng 11"); break;
    case 12: console.log("Tháng 12"); break;
    default: console.log("Không hợp lệ");
  }
}
printMonth(7);

//-------BT11---------
function classify(score) {
  if (score >= 8) {
    console.log("Giỏi");
  } else if (score >= 6.5) {
    console.log("Khá");
  } else if (score >= 5) {
    console.log("Trung bình");
  } else {
    console.log("Yếu");
  }
}
classify(7.5);

//------BT12---------
function weather(temp) {
  if (temp >= 30) {
    console.log("Nóng");
  } else if (temp >= 20) {
    console.log("Mát");
  } else {
    console.log("Lạnh");
  }
}
weather(25);
