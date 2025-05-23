
const pi = 3.14;
let radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);
let area = pi * radius * radius;

let circumference = 2 * pi * radius;
console.log("The area of the circle is: " + area);
console.log("The circumference of the circle is: " + circumference);
let semiCircleArea = area / 2;
console.log("The area of the semicircle is: " + semiCircleArea);
let semiCircleCircumference = pi * radius + 2 * radius;
console.log("The circumference of the semicircle is: " + semiCircleCircumference);
