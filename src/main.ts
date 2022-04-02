console.log("Firing !!!!!!!!!!!!!!");

interface Pizza {
  name: string;
  sizes: string[];
}

let pizza: Pizza;

const createPizza = (name: string, sizes: string[]): Pizza => {
  return {
    name,
    sizes,
  };
};

pizza = createPizza("Sizzler", ["small", "medium"]);

console.log(pizza);
