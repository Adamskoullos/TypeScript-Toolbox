## Primitive Types

- [Number Types, Arguments and Functions](#Number-Types-Arguments-and-Functions)
- [String Types And String Literals](#String-Types-And-String-Literals)
- [Boolean Types And Boolean Literals](#Boolean-Types-And-Boolean-Literals)

---

Core pattern:

- **Variables are assigned types when defined**
- **Arguments are given types when passed in**
- **Expected returned values from a function are given a type when the function is defined**

### Number Types Arguments and Functions

```ts
const pizzaCost: number = 10;
const pizzaToppings: number = 5;

function calculatePrice(cost: number, toppings: number): number {
  return (cost = 1.5 * toppings);
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
```

---

### String Types And String Literals

```ts
const coupon: string = "pizza25";

const normalizeCoupon = (code: string): string => code.toUpperCase();

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
```

---

### Boolean Types And Boolean Literals

```ts
const pizzas: number = 5;

const offerDiscountAvailable = (orders: number): boolean => orders >= 3;

const discountAvailable: boolean = offerDiscountAvailable(pizzas);
```
