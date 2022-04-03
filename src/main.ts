console.log("Firing !!!!!!!!!!!!!!");

class Pizza {
  name: string;
  toppings: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Cheese");

pizza.addTopping("ham");

console.log(pizza);
