//-------BT1--------
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Tổng 1 -> 100:", sum);

//-------BT2--------
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//-------BT3--------
let oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
  oddNumbers.push(i);
}
console.log("Số lẻ 1-99:", oddNumbers);


//-------BT4--------
for (let i = 1; i <= 10; i++) {
  console.log(`user-${i}@example.com`);
}


//-------BT5--------
const revenue = [
  { month: 1, total: 100 },
  { month: 2, total: 150 },
  { month: 3, total: 200 },
  { month: 4, total: 250 },
  { month: 5, total: 300 },
  { month: 6, total: 350 },
  { month: 7, total: 400 },
  { month: 8, total: 450 },
  { month: 9, total: 500 },
  { month: 10, total: 550 },
  { month: 11, total: 600 },
  { month: 12, total: 650 },
];
let totalRevenue = 0;
for (const item of revenue) {
  totalRevenue += item.total;
}
console.log("Tổng doanh thu:", totalRevenue);