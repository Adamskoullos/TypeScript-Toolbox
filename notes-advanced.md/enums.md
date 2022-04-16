## Exploring Enums

> Enums are a data type and they compile down to JS. They are used to defined a set of variables or rules.

### Numeric Enums and Reverse Mappings

When working with enums we can use the index to grab the string value or the string value to grab the index:

```ts
enum Sizes {
  Small,
  Medium,
  Large,
}

console.log(Sizes.Small); // 0 > Using the value gives us the index
console.log(Sizes[0]); // Small > Using the index gives us the value
console.log(Sizes[Sizes.Small]); // Small > gives us the string value
```

---

### String Enums and Inlining Members

We can override the default enum indexing by assigning our own values, thus creating a key/value pair structure.

1. We can assign an enum as the type of a variable
2. We can assign an enum as the type of a variable being passed into a function
3. The power of using enums is that we get inferred options and TypeScript tells us if we are using an incorrect key

```ts
enum Sizes {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

console.log(Sizes.Small); // small

let selected: Sizes = Sizes.Small; // Using Sizes as a type and giving a default

const updateSize = (size: Sizes): void => {
  selected = size;
};

updateSize(Sizes.Large);

console.log(selected); // large
```

Inlining enum members by adding a const at the start reduces the amount of complied down JS:

```ts
const enum Sizes {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
```
