"use strict";
console.log("Firing !!!!!!!!!!!!!!");
const pizza = { name: "BBQ", toppings: 3 };
const pizzaObjString = JSON.stringify(pizza);
const getPizzaName = (pizza) => {
    return JSON.parse(pizza).name;
};
console.log(getPizzaName(pizzaObjString));
