"use strict";

// Cart Quantity

let cartQuantity = 0;

const showCart = document.querySelector(".showCart");
const addCart = document.querySelector(".addToCart");
const addBy2 = document.querySelector(".addBy2");
const addBy3 = document.querySelector(".addBy3");
const addBy4 = document.querySelector(".addBy4");
const addBy5 = document.querySelector(".addBy5");
const clearBtn = document.querySelector(".clearCart");

const showCartFunc = function () {
  console.log(`Products in cart: ${cartQuantity}`);
};

const addCartFunc = function () {
  cartQuantity++;
  console.log(`cart: ${cartQuantity}`);
};

const addBy2Func = function () {
  cartQuantity += 2;
  console.log(`cart: ${cartQuantity}`);
};
const addBy3Func = function () {
  cartQuantity += 3;
  console.log(`cart: ${cartQuantity}`);
};
const addBy4Func = function () {
  cartQuantity += 4;
  console.log(`cart: ${cartQuantity}`);
};
const addBy5Func = function () {
  cartQuantity += 5;
  console.log(`cart: ${cartQuantity}`);
};

// Clear Cart function

const clearCart = () => {
  // console.log("clear btn working!!");

  cartQuantity = 0;
  console.log(`Cart is Empty: ${cartQuantity}`);
};

// Adding event listener to the cart

showCart.addEventListener("click", showCartFunc);
addCart.addEventListener("click", addCartFunc);

addBy2.addEventListener("click", addBy2Func);
addBy3.addEventListener("click", addBy3Func);
addBy4.addEventListener("click", addBy4Func);
addBy5.addEventListener("click", addBy5Func);

// Event Listener to the clear button
clearBtn.addEventListener("click", clearCart);
