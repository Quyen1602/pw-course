//-------------         Khởi động tàu vũ trụ K11     ----------------

let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11";
let crew = ["Alice", "Bob", "Charlie"];

function launchShip(planet, missionName, crew) {
  console.log(`Chuẩn bị khởi động từ ${planet}! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu: ${missionName}!`);
}

launchShip(departurePlanet, mission, crew);


//-------------         Du hành đến hành tinh bí ẩn        ----------------
function calculateDistance(speed, time) {
  return speed * time;
}
const distance = calculateDistance(1000, 24);
console.log(`Khoảng cách đến hành tinh bí ẩn là: ${distance} km`);

//-------------         Khám phá kho báu       ----------------
function decryptCode(code) {
  let result = "";
  for (const ch of code) {
    result += (ch === ch.toLowerCase()) 
      ? ch.toUpperCase() 
      : ch.toLowerCase();
  }
  return result;
}

console.log(decryptCode("K11 Challenge")); 

//-------------         Trở về Trái Đất       ----------------
const returnToEarth = () => {
  console.log("Chuẩn bị trở về Trái Đất!");
};

returnToEarth();