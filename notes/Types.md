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

### Union and Literal Types

### Function Types

### Functions na dOptional Arguments

### Typed Functions and default Params

### Object Types

### Array Types and Generics

### Tuple Types for Arrays
