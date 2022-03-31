console.log("Firing !!!!!!!!!!!!!!");

const pizzas: number = 5;

const offerDiscountAvailable = (orders: number): boolean => orders >= 3;

const discountAvailable: boolean = offerDiscountAvailable(pizzas);

console.log(discountAvailable);
