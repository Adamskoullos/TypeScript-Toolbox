"use strict";
console.log("Firing !!!!!!!!!!!!!!");
class Sizes {
    constructor(sizes) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
    set availableSizes(sizes) {
        this.sizes = sizes;
    }
}
class Pizza extends Sizes {
    constructor(name, sizes) {
        super(sizes);
        this.name = name;
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    get currentName() {
        return this.name;
    }
    set currentName(name) {
        this.name = name;
    }
}
const pizza = new Pizza("Big Cheese", ["small", "medium"]);
const pizzaName = pizza.currentName;
pizza.currentName = "Big Sizzler";
pizza.availableSizes = ["large", "Extra Large", "Super Size"];
console.log(pizza);
