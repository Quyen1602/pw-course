// ----- ex1------

 const number = 12;
 let name = "my number";
 let isEven = false;

console.log("Type of number:", typeof number);
console.log("Type of name:", typeof name);
console.log("Type of isEven:", typeof isEven);



// ------ ex2-------
// Sai ở Const, vì biến const không thể gán lại giá trị mới sau khi đã được khởi tạo. Để sửa lỗi này, bạn có thể sử dụng let thay vì const để khai báo biến myName, như sau:
let myName = "Alex";
myName = "Nagi";
console.log(myName); 


// ------ ex3 ------
a = true
b = false
c = true

a && b && c
true && false && true
// false -> vì gặp false đầu tiên dừng lai và trả về false


a && b || c
// true && false || true
// false || true
// true -> vì true && false sẽ trả về false, sau đó false || true sẽ trả về true