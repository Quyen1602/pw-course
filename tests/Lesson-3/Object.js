//---- BT1 ------

const car = {
    make : "Toyota",
    model : "Corolla",
    year : 2021
}
console.log(car.year)

//------BT2------
const person = {
    name : "quyen",
    address: {
        street: "Ba Trieu",
        city: "Ho Chi Minh",
        Country: "VN"
    }
}
console.log(person.address.street)

//------BT3------
// Khi key là bien, chuỗi có khoảng trắng hay kí tự đặc biệt, kb tên key trước
const student = {
    name: "Hong",
    grades:{
        math: 8,
        english: 9
    }
}
console.log(student["grades"]["math"])

//-----BT4-------
let product = {
  "iphone": 25000,
  "macbook": 40000,
  "ipad": 20000
};
for (let name in product){
    console.log(`san pham : ${name}`)

}

//------BT5------
const setting = {
    volume: 50,
    brightness: 70
}
setting.volume = 60
console.log(setting.volume)

//-----BT6-------
const Bike = {
}
Bike.color = "tim"
console.log(Bike)

//-----BT7-----
const employee = {
    name: "Ha",
    age: 18
}
delete employee.age
console.log(employee)

//------BT8------
const school = {
    classA : ["an", " Binh", "Chau"],
    classB : ["Đào", "Hương", "Giang"]
}
console.log(school["classA"])
console.log(school["classB"])
