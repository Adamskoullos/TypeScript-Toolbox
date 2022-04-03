"use strict";
console.log("Firing !!!!!!!!!!!!!!");
class Pizza {
    constructor(name) {
        this.toppings = [];
        this.name = name;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
const pizza = new Pizza("Cheese");
pizza.addTopping("ham");
console.log(pizza);
