console.log("Firing !!!!!!!!!!!!!!");

let pizzas: number = 5;

const updatePizzas = (orders: number): void => {
  pizzas = orders;
};

updatePizzas(10);

console.log(pizzas);
