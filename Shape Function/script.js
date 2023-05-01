const radius = 15;
var pi = Math.PI;
const getAreaOfCircle = (radius, pi) => {
  return pi * radius * radius;
};
console.log("The area of the circle is: " + getAreaOfCircle(radius, pi));

const rad = 10;
let pie = Math.PI;
const getCircumferenceOfCircle = (rad, pie) => {
  return 2 * pie * rad;
};
console.log(
  "The circumference of the circle is: " + getCircumferenceOfCircle(rad, pi)
);
// ask about repeating values?

const side = 8;
const getAreaOfSquare = (side) => {
  return side * side;
};
console.log("The area of the square is: " + getAreaOfSquare(side));

const base = 6;
const height = 10;
const getAreaOfTriangle = (base, height) => {
  return (height * base) / 2;
};
console.log("The area of the triangle is: " + getAreaOfTriangle(base, height));
