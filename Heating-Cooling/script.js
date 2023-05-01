let actualTemp;
actualTemp = 75;
let desiredTemp;
desiredTemp = 72;

if (actualTemp >= desiredTemp) {
  console.log("Run A/C");
} else if (actualTemp === desiredTemp) {
  console.log("Standby");
} else {
  console.log("Run heat");
}
//extended activity

let tempCelsius = 0;
let targetUnit = "F";

switch (targetUnit) {
  case "F":
    console.log("targetUnit − 32) tempCelsius × 5/9 = C");
    break;
  case "K":
    console.log("tempCelsius + 273.15 = K");
    break;
  default:
    console.log("Already shown");
    break;
}
