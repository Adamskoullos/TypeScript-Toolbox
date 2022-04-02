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

### Extending Interfaces

### Interfaces and Optional Properties

### Interfaces with Index Signatures
