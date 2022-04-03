"use strict";
console.log("Firing !!!!!!!!!!!!!!");
let pizza;
const createPizza = (name, sizes) => {
    return {
        name,
        sizes,
        getAvailablePizzas() {
            return this.sizes;
        },
    };
};
pizza = createPizza("Sizzler", ["small", "medium"]);
pizza[123] = "value";
console.log(pizza);
console.log(pizza[123]);
