## Types

### Any

- Data that is not assigned a value or a type when declared is implicitly assigned as type `any`
- Used with `let`, type `any` allows the assigned value to be reassigned to different types
- Properties can be set to type `any` explicitly

```ts
let variable; // Implicitly assigned as type any

variable = 10;
variable = "10";
variable = true;
```

### Implicit vs Explicit

- Variables declared with a value are implicitly given that type:

```ts
let implicitCoupon = "pizza25"; // Type string
```

- We can explicitly set the type of a variable even if we dont assign an initial value:

```ts
let explicitCoupon: string;
```

### Void

- Function that do not return a value return type `void` implicitly, however we can explicitly state this:

```ts
let pizzas: number = 5;

const updatePizzas = (orders: number): void => {
  pizzas = orders;
};
```

### Never

- We can use the `never` type on functions if the function execution context will never go past a certain point or return anything. The example below shows how type `never` can be used:

```ts
function orderError(error: string): never {
  throw new Error(error);
  // thread never runs further and function never returns a value
}
```

### Null Undefined and Strict Null checks

- When using strict mode, `null` and `undefined` are required to be assigned as types if they will be used:

```ts
let coupon: string | null | undefined = "pizzas25";
```

### Union and Literal Types

- The below examples show how we can use the `Union` operator to define all possible accepted `size` arguments

```ts
let pizzaSize: number = 1;

const selectSize = (size: 1 | 2 | 3): void => {
  pizzaSize = size;
};

selectSize(1);
```

```ts
let pizzaSize: string = "large";

const selectSize = (size: "small" | "medium" | "large"): void => {
  pizzaSize = size;
};

selectSize("medium");
```

### Function Types

- If we want to `type` a function before we define its logic we can use the below pattern:

```ts
let sumOrder: (price: number, quantity: number) => number;
```

Then when we create the logic we will have the function signature available:

```ts
sumOrder = (x, y) => x * y;

const sum = sumOrder(25, 5);
```

### Functions and Optional Arguments

- Use the question mark to tell TypeScript the argument is optional:

```ts
let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
  if (y) {
    return x * y;
  }
  return x;
};

const sum = sumOrder(25);
```

The better approach is to use optional arguments with default values as below..

### Typed Functions and default Params

- If using an optional argument, we can set a default value:

```ts
let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 5) => {
  return x * y;
};

const sum = sumOrder(25);
```

### Object Types

**Note**: On defining a property that is to be an object we can define the objects structure, separate each item with `;` not `,`

- We can define the object and its types first and then use it later:

```ts
let pizza: { name: string; price: number; getName(): string };

pizza = {
  name: "Cheese",
  price: 20,
};
```

- or we can do it inline:

```ts
let pizza: { name: string; price: number; getName(): string } = {
  name: "Cheese",
  price: 20,
  getName() {
    return pizza.name; // or this.name
  },
};
```

### Array Types and Generics

- LiteralTypes:

```ts
let sizes: string[]; // array of strings

sizes = ["1", "2", "3"];
```

- Generic Types:

```ts
let toppings: Array<string>;

toppings = ["cheese", "tomato", "ham"];
```

### Tuple Types for Arrays

- We can use `Tuple` types when we are using multiple data types within an array when the data is consistently structured the same way:

**Note**: Tuple types are placed within the array at the specific index

```ts
let pizza: [string, number];

pizza = ["cheese", 20];
```
