`use strict`;

console.log("Numbers and Math");

// console.log(1 * 10 + 3 * 8 + 1 * 5);

// let totalPay = 1 * 10 + 3 * 8 + 1 * 5;
// console.log(`Each person pays: $${totalPay / 3}`);

// console.log(1 * 18.5 + 2 * 7.5);

// let totalPay = 1 * 18.5 + 2 * 7.5;
// console.log(`10% Tax Amount: $${0.1 * totalPay}`);
// console.log(`20% Tax Amount: $${0.2 * totalPay}`);

// Amazon Price Cart

//  All prices are in the cents
let toasterPrice = 1899;
let basketBallPrice = 2095;
let cottonTshirtPrice = 799;

// let totalPrice = (toasterPrice + basketBallPrice + cottonTshirtPrice) / 100;
// console.log(totalPrice);

let shippingAndHandlingPrice = 499;
let totalBeforeTax =
  (toasterPrice +
    basketBallPrice +
    cottonTshirtPrice +
    shippingAndHandlingPrice) /
  100;
// console.log(`$${totalBeforeTax}`);

// console.log(
//   `Estimated Tax:: ${
//     Math.round(
//       (toasterPrice +
//         basketBallPrice +
//         cottonTshirtPrice +
//         shippingAndHandlingPrice) *
//         0.1
//     ) / 100
//   }`
// );

// console.log((5292 + 529) / 100);
// console.log(Math.floor(2.8));  rounding down a Integer
// console.log(Math.ceil(2.2)); rounding up a Integer

const temp = Number(prompt("Enter Temperature: "));

// const degreeFarhenite = (temp * 9) / 5 + 32;
// console.log(degreeFarhenite);

// const degreeCelsius = ((temp - 32) * 5) / 9;
// console.log(degreeCelsius);
