//In ra các giá trị chia hết cho 3 từ 1000 đến 2000

for (let i = 1000; i <= 2000; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// // Cách khác sử dụng toán tử điều kiện
// for (let i = 1000; i <= 2000; i++) {
//     console.log(i % 3 === 0 ? i : '');
// }   