"use strict";

// console.log("My name is: ");
// console.log("Arpit");
// console.log("My name is: " + "Arpit");
// console.log(`Total Cost: $${5 + 3}`);
// alert(`Total Cost: $${5 + 3}`);

// console.log(`Total Cost: $${(599 + 295) / 100}`);
// alert(`Total Cost: $${(599 + 295) / 100}`);
// alert(`Total Cost: $${(599 + 295) / 100}
// Thank you, come again!`);

// Amazon Cart Project

// All prices must be calculated in cents
console.log(`Items${2 * 2 + 2 * 2}: $${(2 * 2095 + 2 * 799) / 100} `);
console.log(`Shipping & handling:  $${(2 * 499) / 100} `);
console.log(`Total before tax:   $${(2 * 2095 + 2 * 799 + 2 * 499) / 100} `);
console.log(
  `Estimated tax(${10}%): $${
    Math.round((2 * 2095 + 2 * 799 + 2 * 499) * 0.1) / 100
  }`
);

console.log(
  `Order total: $${
    Math.round((2 * 2095 + 2 * 799 + 2 * 499) * 0.1) / 100 +
    (2 * 2095 + 2 * 799 + 2 * 499) / 100
  }`
);
