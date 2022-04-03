console.log("Firing !!!!!!!!!!!!!!");

abstract class Sizes {
  constructor(private sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }
  set availableSizes(sizes) {
    this.sizes = sizes;
  }
}

class Pizza extends Sizes {
  toppings: string[] = [];

  constructor(private name: string, sizes: string[]) {
    super(sizes);
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}

const pizza = new Pizza("Big Cheese", ["small", "medium"]);

const pizzaName = pizza.getName;
pizza.setName = "Big Sizzler";
pizza.availableSizes = ["large", "Extra Large", "Super Size"];

console.log(pizza);
