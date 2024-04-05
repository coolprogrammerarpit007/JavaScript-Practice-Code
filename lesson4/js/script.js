`use strict`;

// Adding functionality

// Adding to cart function

const addCart = () => {
  alert("Item is added to the cart...");
};

const buyNow = () => {
  alert("your request is processig...");
  setTimeout(() => {
    alert("Your request has been accepted, check your cart now");
  }, 7000);
};
