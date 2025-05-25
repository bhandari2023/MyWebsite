const myChkBox = document.getElementById("myChkBox");
const myChkBoxResult = document.getElementById("myChkBoxResult");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCard");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
    if (myChkBox.checked) {
        subResult.textContent = "You have successfully subscribed to our newsletter.";
    } else {
        subResult.textContent = "You have not subscribed to our newsletter.";
    }


    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa as your payment method.";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard as your payment method.";
    } else if (paypalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal as your payment method.";
    }
    else {
        paymentResult.textContent = "Please select a payment method.";
    }
}








const universalInput = document.getElementById("universalInput");
const universalResult = document.getElementById("universalResult");
const universalBtn = document.getElementById("universalBtn");
universalBtn.onclick = function () {
    const username = universalInput.value.trim().charAt(0).toUpperCase() + universalInput.value.trim().slice(1).toLowerCase();
    universalResult.textContent = `Hello ${username}, welcome to our site!`;
}

// universalBtn.addEventListener("click", function () {
//     const input = universalInput.value.trim();
//     if (input >= 100) {
//         universalResult.textContent = "You are too old to enter this site";
//     } else if (input >= 18 && input < 100) {
//         universalResult.textContent = "You are an adult.";
//     } else if (input >= 13 && input < 18) {
//         universalResult.textContent = "You are a teenager.";
//     } else if (input >= 0 && input < 13) {
//         universalResult.textContent = "You are a child.";
//     }
//     else {
//         universalResult.textContent = "Please enter a valid age.";
//     }


// });






// universalBtn.addEventListener("click", function () {
//     const input = universalInput.value.trim();
//     if (input < 25) {
//         universalResult.textContent = "You are a child.";
//     } else {
//         universalResult.textContent = "You are an adult.";
//     }
// });



// const Year = document.getElementById("evenOddInput");
// const evenOddResult = document.getElementById("evenOddResult");
// const evenOddBtn = document.getElementById("evenOddBtn");

// evenOddBtn.addEventListener("click", function () {
//     const year = parseInt(evenOddInput.value, 10);
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         evenOddResult.textContent = `${year} is a leap year.`;
//     } else {
//         evenOddResult.textContent = `${year} is not a leap year.`;
//     }
// });





// grade calculator
// evenOddBtn.addEventListener("click", function () {
//     const number = parseInt(evenOddInput.value, 10);
//     if (isNaN(number)) {
//         evenOddResult.textContent = "Please enter a valid number.";
//     } else if (number >= 90 && number <= 100) {
//         evenOddResult.textContent = "You got A+";
//     } else if (number >= 80 && number < 90) {
//         evenOddResult.textContent = "You got A";
//     } else if (number >= 70 && number < 80) {
//         evenOddResult.textContent = "You got B";
//     } else if (number >= 60 && number < 70) {
//         evenOddResult.textContent = "You got C";
//     } else if (number >= 50 && number < 60) {
//         evenOddResult.textContent = "You got D";
//     }
//     else if (number >= 0 && number < 50) {
//         evenOddResult.textContent = "You got F";
//     } else {
//         evenOddResult.textContent = "Please enter a number between 0 and 100.";
//     }

// });



// function to check num is + - or 0

// evenOddBtn.addEventListener("click", function () {
//     const number = parseInt(evenOddInput.value, 10);
//     if (isNaN(number)) {
//         evenOddResult.textContent = "Please enter a valid number.";
//     } else {
//         if (number === 0) {
//             evenOddResult.textContent = `${number} is zero.`;
//         } else if (number > 0) {
//             evenOddResult.textContent = `${number} is a positive number.`;
//         } else {
//             evenOddResult.textContent = `${number} is a negative number.`;
//         }
//     }
// });

// function to check even and ODD
// evenOddBtn.addEventListener("click", function () {
//     const number = parseInt(evenOddInput.value, 10);
//     if (isNaN(number)) {
//         evenOddResult.textContent = "Please enter a valid number.";
//     }
//     else {
//         if (number % 2 === 0) {
//             evenOddResult.textContent = `${number} is an even number.`;
//         } else {
//             evenOddResult.textContent = `${number} is an odd number.`;
//         }
//     }
// });

// const evenOddInput = document.getElementById("evenOddInput");
// const evenOddResult = document.getElementById("evenOddResult");
// const evenOddBtn = document.getElementById("evenOddBtn");

// evenOddBtn.addEventListener("click", function () {
//     const number = parseInt(evenOddInput.value, 10);
//     if (isNaN(number)) {
//         evenOddResult.textContent = "Please enter a valid number.";
//     }
//     else {
//         if (number % 2 === 0) {
//             evenOddResult.textContent = `${number} is an even number.`;
//         } else {
//             evenOddResult.textContent = `${number} is an odd number.`;
//         }
//     }
// });





// program for dice roll application
// const diceBtn = document.getElementById("diceBtn");
// const diceResult = document.getElementById("diceResult");
// const diceResult2 = document.getElementById("diceResult2");
// const diceResult3 = document.getElementById("diceResult3");
// diceBtn.addEventListener("click", function () {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     let randomNumber2 = Math.floor(Math.random() * 6) + 1;
//     let randomNumber3 = Math.floor(Math.random() * 6) + 1;// Generates a random number between 1 and 6
//     diceResult.textContent = randomNumber;
//     diceResult2.textContent = randomNumber2;
//     diceResult3.textContent = randomNumber3;

// });


// let randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6




// document.getElementById("submit").addEventListener("click", function () {
//     try {
//         const pi = 3.14;
//         const radiusInput = document.getElementById("radius");
//         const resultElement = document.getElementById("result");

//         let radius = radiusInput.value.trim();

//         if (radius === "") {
//             alert("Please enter a radius.");
//             throw new Error("Radius is empty");
//         }

//         radius = Number(radius);
//         if (isNaN(radius) || radius <= 0) {
//             alert("Please enter a valid positive number.");
//             throw new Error("Invalid radius");
//         }

//         const area = pi * radius * radius;
//         const circumference = 2 * pi * radius;
//         const semiCircleArea = area / 2;
//         const semiCircleCircumference = pi * radius + 2 * radius;

//         resultElement.textContent =
//             `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}, ` +
//             `Semi-Circle Area: ${semiCircleArea.toFixed(2)}, Semi-Circle Circumference: ${semiCircleCircumference.toFixed(2)}`;
//     } catch (error) {
//         document.getElementById("result").textContent = "Error: " + error.message;
//     }
// });

// document.getElementById("submit2").addEventListener("click", function () {
//     const radiusInput = document.getElementById("radius");
//     radiusInput.textContent = ""; // Clear unrelated output

//     const sqSideInput = document.getElementById("sqSide");
//     const result = document.getElementById("result");
//     const sideValue = sqSideInput.value.trim();

//     try {
//         if (sideValue === "") {
//             alert("Please enter a side length.");
//             throw new Error("Side length is empty");
//         }

//         const sqSide = Number(sideValue);

//         if (isNaN(sqSide) || sqSide <= 0) {
//             alert("Please enter a valid positive number.");
//             throw new Error("Invalid side length");
//         }

//         const sqArea = sqSide * sqSide;
//         const sqPerimeter = 4 * sqSide;

//         result.textContent = `Area: ${sqArea.toFixed(2)}, Perimeter: ${sqPerimeter.toFixed(2)}`;
//     } catch (error) {
//         result.textContent = "Error: " + error.message;
//     }
// });

// document.getElementById("submit3").addEventListener("click", function () {

//     const baseTriangleInput = document.getElementById("base");
//     const heightTriangleInput = document.getElementById("height");
//     const result = document.getElementById("result");
//     const baseValue = baseTriangleInput.value.trim();
//     const heightValue = heightTriangleInput.value.trim();
//     try {
//         if (baseValue === "" || heightValue === "") {
//             alert("Please enter both base and height.");
//             throw new Error("Base or height is empty");
//         }

//         const base = Number(baseValue);
//         const height = Number(heightValue);

//         if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
//             alert("Please enter valid positive numbers.");
//             throw new Error("Invalid base or height");
//         }

//         const triangleArea = (base * height) / 2;
//         const trianglePerimeter = base + 2 * Math.sqrt((base * base) + (height * height));

//         result.textContent = `Area: ${triangleArea.toFixed(2)}, Perimeter: ${trianglePerimeter.toFixed(2)}`;
//     } catch (error) {
//         result.textContent = "Error: " + error.message;
//     }
// }
// );

// Function for Counter Application
// const increaseButton = document.getElementById("increaseBtn");
// const decreaseButton = document.getElementById("decreaseBtn");
// const resetButton = document.getElementById("resetBtn");
// const counterDisplay = document.getElementById("myCount");
// let count = 0;
// increaseButton.addEventListener("click", function () {
//     count++;
//     counterDisplay.textContent = count;
// });
// decreaseButton.addEventListener("click", function () {
//     count--;
//     counterDisplay.textContent = count;
// });
// resetButton.addEventListener("click", function () {
//     count = 0;
//     counterDisplay.textContent = count;
// });

