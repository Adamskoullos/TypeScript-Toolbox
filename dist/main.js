"use strict";
console.log("Firing !!!!!!!!!!!!!!");
const pizzas = 5;
const offerDiscountAvailable = (orders) => orders >= 3;
const discountAvailable = offerDiscountAvailable(pizzas);
console.log(discountAvailable);
