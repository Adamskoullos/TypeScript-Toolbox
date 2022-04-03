## Classes Properties and Inheritance

- [Understanding Classes and Constructors](#Understanding-Classes-and-Constructors)
- [Public and Private Members](#Public-and-Private-Members)
- [Readonly Members](#Readonly-Members)
- [Setters and Getters](#Setters-and-Getters)
- [Classes and Inheritance](#Classes-and-Inheritance)
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

- By default properties and functions are `public`
- `Private` properties cannot be directly accessed on the class, but only via functions on the class
- `Private` functions also cannot be directly accessed on the class, but only called via public functions on the class

We can use the short hand when assigning constructor values. Below is the normal way by defining a property and then within the constructor assigning the passed in value to the defined property:

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
```

And here is the shorthand. By prefixing either `private` or `public` to the passed in argument we do not need to pre-define the prop it will be assigned to as long as the names are the same. Notice we also do not need to explicitly assign the passed in value to a prop. TS knows to create a prop with the same name and also the value:

```ts
class Pizza {
  toppings: string[] = [];

  constructor(private name: string) {}

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Cheese");

pizza.addTopping("ham");
```

### Readonly Members

For properties that we want to make available directly on the class but do not want them to be directly changed we can make them `readonly`:

```ts
class Pizza {
  toppings: string[] = [];

  constructor(readonly name: string) {}

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Cheese");

const pizzaName = pizza.name; // Can do this

pizza.name = "Sizzler"; // Cannot do this
```

### Setters and Getters

We can use `setters` and `getters` when working with `private` properties and functions

```ts
class Pizza {
  toppings: string[] = [];

  constructor(private name: string) {}

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}

const pizza = new Pizza("Big Cheese");

const pizzaName = pizza.getName;
pizza.setName = "Big Sizzler";

console.log(pizzaName);
console.log(pizza.getName);
```

### Classes and Inheritance

The below example creates a base class `Sizes` and extends it to create `Pizza`.
`Pizza` inherits the `get` and `set` `availableSizes` functions and the private `sizes` property

```ts
class Sizes {
  constructor(private sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }
  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

class Pizza extends Sizes {
  toppings: string[] = [];

  constructor(private name: string, sizes: string[]) {
    super(sizes);
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}

const pizza = new Pizza("Big Cheese", ["small", "medium"]);

const pizzaName = pizza.getName;
pizza.setName = "Big Sizzler";
pizza.availableSizes = ["large", "Extra Large", "Super Size"];
```

### Abstract Classes

> An Abstract class is created in order to use as a base class and extend from in order to create further classes that are used to create objects

To make a class an `abstract` class we just use the keyword. This prevents a new instance of the class being instantiated:

```ts
abstract class Sizes {
  constructor(private sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }
  set availableSizes(sizes) {
    this.sizes = sizes;
  }
}
```

### Protected Members and Inheritance

### Interface contracts with “implements”

### Static Properties and Methods
