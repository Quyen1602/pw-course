//-------BT1--------
const sum = n => n * (n + 1) / 2;
console.log("Tổng 1 -> 100:", sum(100));

//-------BT2--------
Array.from({ length: 8 }, (_, i) => i + 2).forEach(i => {
  console.log(`\nBảng cửu chương ${i}:`);
  Array.from({ length: 10 }, (_, j) => j + 1).forEach(j => {
    console.log(`${i} x ${j} = ${i * j}`);
  });
});

//-------BT3--------
const oddNumbers = Array.from({ length: 50 }, (_, i) => 2*i + 1);
console.log("Số lẻ 1-99:", oddNumbers);


//-------BT4--------
const emails = Array.from({ length: 10 }, (_, i) => `user${i+1}@example.com`);
console.log(emails);

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

const totalRevenue = revenue.reduce((sum, item) => sum + item.total, 0);
console.log("Tổng doanh thu:", totalRevenue);


