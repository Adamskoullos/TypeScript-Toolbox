## Interfaces

- [Creating Interfaces](#Creating-Interfaces)
- [Interfaces with Function Types](#Interfaces-with-Function-Types)
- [Extending Interfaces](#Extending-Interfaces)
- [Interfaces and Optional Properties](#Interfaces-and-Optional-Properties)
- [Interfaces with Index Signatures](#Interfaces-with-Index-Signatures)

---

### Creating Interfaces

Initial example using `Types`:

```ts
type Pizza = { name: string; sizes: string[] };

let pizza: Pizza;

const createPizza = (name: string, sizes: string[]): Pizza => {
  return {
    name,
    sizes,
  };
};

pizza = createPizza("Sizzler", ["small", "medium"]);
```

Refactored example using an `Interface`:

```ts
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
```

### Interfaces with Function Types

The below example shows the differences in syntax when creating function types and also within interfaces.

**Type** example:

```ts
type getAvailablePizzas = () => string[];
```

**Interface** example:

```ts
interface Pizza {
  name: string;
  sizes: string[];
  getAvailablePizzas(): string[];
}
```

### Extending Interfaces

The below example pulls the `Sizes` prop out of the `Pizza` interface and a `Sizes` interface is created as a base interface.
The `Pizza` interface is then created by extending `Sizes`:

```ts
interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  getAvailablePizzas(): string[];
}

let pizza: Pizza;

const createPizza = (name: string, sizes: string[]): Pizza => {
  return {
    name,
    sizes,
    getAvailablePizzas() {
      return this.sizes;
    },
  };
};

pizza = createPizza("Sizzler", ["small", "medium"]);
```

### Interfaces and Optional Properties

We can use the `?` within interfaces to mark a property as optional:

```ts
interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailablePizzas(): string[];
}

let pizza: Pizza;

const createPizza = (name: string, sizes: string[]): Pizza => {
  return {
    name,
    sizes,
    getAvailablePizzas() {
      return this.sizes;
    },
  };
};

pizza = createPizza("Sizzler", ["small", "medium"]);

pizza.toppings = 2;
```

### Interfaces with Index Signatures

```ts
interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  getAvailablePizzas(): string[];
  [key: number]: string;
}

// let pizza: Pizza;

// const createPizza = (name: string, sizes: string[]): Pizza => {
//   return {
//     name,
//     sizes,
//     getAvailablePizzas() {
//       return this.sizes;
//     },
//   };
// };

// pizza = createPizza("Sizzler", ["small", "medium"]);

pizza[123] = "value";

console.log(pizza[123]);
```
