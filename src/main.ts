console.log("Firing !!!!!!!!!!!!!!");

interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  getAvailablePizzas(): string[];
  [key: number]: string;
}

let pizza: Pizza;

const createPizza = (name: string, sizes: string[]): Pizza => {
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
