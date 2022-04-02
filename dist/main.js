"use strict";
console.log("Firing !!!!!!!!!!!!!!");
let pizza;
const createPizza = (name, sizes) => {
    return {
        name,
        sizes,
    };
};
pizza = createPizza("Sizzler", ["small", "medium"]);
console.log(pizza);
