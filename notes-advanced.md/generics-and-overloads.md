## Generics and Overloads

### Function Generics

> By using generics we can define the type at call

We can pass generic types down and between members:

- Classes
- Properties
- Methods
- Function arguments
- Return types of values

The below example shows how we can create a very generic class to work with lists and use `generics` to specify types for each new instance:

```ts
class Pizza {
  constructor(private name: string, private price: number) {}
}

class List<T> {
  // 1. Pass generic T into class
  constructor(private list: T[]) {} // 2. array of generic type items

  addItem(item: T): void {
    // 3. item passed in to be of the generic type passed in
    this.list.push(item);
  }

  getList(): T[] {
    // 4. return and array of the generic type
    return this.list;
  }
}

const list = new List<Pizza>([]); // Define the generic type on instance or at call

list.addItem(new Pizza("Cheese", 25));
list.addItem(new Pizza("Ham", 15));

console.log(list.getList());
```

---

### Function Overloads

Overloads allow us to define the different types that can be used within a function:

```ts
// Overloads (Do not get compiled)
function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];

// Implementation (gets compiled to JS)
function reverse<T>(arrayOrString: string | T[]): string | T[] {
  if (typeof arrayOrString === "string") {
    return arrayOrString.split("").reverse().join("");
  }
  return arrayOrString.reverse();
}

reverse("cheese");
reverse(["bacon", "ham", "pepperoni"]);
```
