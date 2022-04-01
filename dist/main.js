"use strict";
console.log("Firing !!!!!!!!!!!!!!");
let pizzas = 5;
const updatePizzas = (orders) => {
    pizzas = orders;
};
updatePizzas(10);
console.log(pizzas);
