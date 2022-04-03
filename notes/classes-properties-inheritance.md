## Classes Properties and Inheritance

- [Understanding Classes and Constructors](#Understanding-Classes-and-Constructors)
- [Public and Private Members](#Public-and-Private-Members)
- [Readonly Members](#Readonly-Members)
- [Setters and Getters](#Setters-and-Getters)
- [Classes Inheritance](#Classes-Inheritance)
- [Abstract Classes](#Abstract-Classes)
- [Protected Members and Inheritance](#Protected-Members-and-Inheritance)
- [Interface contracts with “implements”](#Interface-contracts-with-“implements”)
- [Static Properties and Methods](#Static-Properties-and-Methods)

---

### Understanding Classes and Constructors

1. Properties expecting to be bound with values being passed into the constructor need to be initial defined on the class
2. Default values can also be initially set when a prop is defined

```ts
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
```

### Public and Private Members

### Readonly Members

### Setters and Getters

### Classes Inheritance

### Abstract Classes

### Protected Members and Inheritance

### Interface contracts with “implements”

### Static Properties and Methods
