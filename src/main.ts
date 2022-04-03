console.log("Firing !!!!!!!!!!!!!!");

interface SizesInterface {
  availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
  constructor(private sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }
  set availableSizes(sizes) {
    this.sizes = sizes;
  }
}

interface PizzaInterface extends SizesInterface {
  name: string;
  toppings: string[];
  addTopping(topping: string): void;
  currentName: string;
}

class Pizza extends Sizes implements PizzaInterface {
  toppings: string[] = [];

  constructor(public name: string, sizes: string[]) {
    super(sizes);
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  get currentName() {
    return this.name;
  }

  set currentName(name: string) {
    this.name = name;
  }
}

const pizza = new Pizza("Big Cheese", ["small", "medium"]);

const pizzaName = pizza.currentName;
pizza.currentName = "Big Sizzler";
pizza.availableSizes = ["large", "Extra Large", "Super Size"];

console.log(pizza);
