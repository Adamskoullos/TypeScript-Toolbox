## Type Queries

### “typeof” Type Queries

We can get the `TypeScript` type of an object with the following syntax:

```ts
typeof person;
```

The below object example

```ts
const person = {
  name: "Dave",
  age: 23,
};
```

has an inferred `TypeScript` type of:

```ts
const person: {
  name: string;
  age: number;
};
```

This means:

```ts
// Type  Person is the type of person
type Person = typeof person;
```

However in `JavaScript`

```ts
typeof person;
```

returns `'object'`

So in TypeScript we can grab an objects inferred type and use it to assign as the type to a type and then use that type:

1. We took the `person` object TypeScript type
2. Assigned it as the type of type `Person`
3. And then assigned `anotherPerson` as type `Person`

```ts
const anotherPerson: Person = {
  name: "Terry",
  age: 48,
};
```

or we could do it inline:

```ts
const anotherPerson: typeof person = {
  name: "Terry",
  age: 48,
};
```

### “keyof” Index Type Queries

```ts
type PersonKeys = keyof Person;
// type PersonKeys = "name" | "age"
```

```ts
type PersonTypes = Person[PersonKeys];
// type PersonTypes = string |number
```

### “keyof”, Generics and Lookup Types

The below example use the generics `T` for type object and `K` for type string.

The line `K extends keyof T` tells TypeScript that the value of `K` is a key/property on object `T`.

Doing this allows us to `return obj[key]` and also gives us the type returned to `personName` as well as real-time checking of arguments.

```ts
const person = {
  name: "Dave",
  age: 23,
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "name");
// Dave
```
