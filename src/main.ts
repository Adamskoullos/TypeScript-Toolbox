console.log("Firing !!!!!!!!!!!!!!");

type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: "BBQ", toppings: 3 };

const pizzaObjString = JSON.stringify(pizza);

const getPizzaName = (pizza: string): string => {
  return (JSON.parse(pizza) as Pizza).name;
};

console.log(getPizzaName(pizzaObjString));
