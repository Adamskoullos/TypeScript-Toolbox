## Type Aliases and Assertions

### Type Aliases

We can create custom types with the `type` alias key word:

```ts
type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;

let pizzaSize: Size = "small";

let selectSize: Callback = (size: Size) => {
  pizzaSize = size;
};

selectSize("large");
```

### Type Assertions

The below example first creates an object type `Pizza` which is then used as the type to create `pizza`.
This is then stringified and passed into the `getPizzaName` function.
Within the function the string is turned into a JS object and given the type `Pizza` using the `as` syntax, this then gives us access to the available properties on type `Pizza`.

```ts
type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: "BBQ", toppings: 3 };

const pizzaObjString = JSON.stringify(pizza);

const getPizzaName = (pizza: string): string => {
  return (JSON.parse(pizza) as Pizza).name;
};

console.log(getPizzaName(pizzaObjString));
```
