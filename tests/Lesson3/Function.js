//------BT1: multiply------
const multiply = (a, b) => {
  console.log(`${a} x ${b} =`, a * b);
};

multiply(3, 4);
multiply(7, 5);

//------BT2: findMin------
const findMin = (a, b, c) => Math.min(a, b, c);

console.log("Min của (5, 2, 9):", findMin(5, 2, 9));
console.log("Min của (10, 15, 7):", findMin(10, 15, 7));

//------BT3: getTopStudents------
const getTopStudents = (students, threshold) =>
  students.filter(s => s.score >= threshold).map(s => s.name);

// Ví dụ danh sách học sinh
const studentsList = [
  { name: "Alice", score: 8.5 },
  { name: "Bob", score: 6.5 },
  { name: "Charlie", score: 9 },
  { name: "David", score: 5 }
];

console.log("Top students (>=7):", getTopStudents(studentsList, 7));
console.log("Top students (>=9):", getTopStudents(studentsList, 9));

//------BT4: calculateInterest------
const calculateInterest = (principal, rate, years) =>
  principal + (principal * rate * years) / 100;

console.log("Số tiền sau 3 năm:", calculateInterest(1000, 5, 3)); // 1150
console.log("Số tiền sau 5 năm:", calculateInterest(2000, 4, 5)); // 2400
