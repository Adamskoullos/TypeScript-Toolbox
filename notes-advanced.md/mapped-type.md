## Mapped Types

Mapped types `MappedType<T>` can be seen as functions that take in a `generic` as an argument and loop through each property in the generic altering its behaviour/structure.

### “Readonly” Mapped Type

In the below example we are using the `Readonly<T>` mapped type. The function `freeze` returns a generic type, however that generic type is first passed into `Readonly` and each property is set to `readonly`:

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Dave",
  age: 23,
};

function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const personOne = freeze({ ...person });
// Can be used without defining the interface to be used as TypeScript will
// dynamically infer this as the object is passed in

// Can be used with different interfaces to explicitly define the type when called
const personTwo = freeze<Person>({ ...person });
```

Then diving into the `mapped` types, the `freeze` function is using `Readonly`:

```ts
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}
```

TypeScript behind the scenes maps over each key in this case `P` (property) of the object `T` (type) and assigns the `readonly` flag:

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

The readonly flag then provides a warning if a new value is assigned to the key...however to prevent the re-assignment we also use `Object.freeze(obj)`

---

### “Partial” Mapped Type

To make a property within an interface/type `optional` we can add the `?` flag, the below example shows a nice pattern where we can map over all properties and dynamically assign them as `optional`:

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### “Nullable” Mapped Type

```ts
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```

---

### “Required” Mapped Type, +/- Modifiers

If an interface/type has `optional` properties and in a particular usage we want to ensure all properties are available we can use a mapped type to remove any potential optional modifiers `-?`, leaving the original interface untouched:

```ts
interface Person {
  name: string;
  age: number;
  title?: string;
}

// Built into TypeScript
type Required<T> = {
  [P in keyof T]-?: T[P];
};

function printPerson(obj: Required<Person>) {
  return `${obj.title} ${obj.name} is ${obj.age}`;
}

const person: Required<Person> = {
  name: "Dave",
  age: 23,
  title: "Mr",
};

const personDetails = printPerson(person);
```

---

### “Pick” Mapped Type

`Pick` allows us to use `interfaces` that have all required properties and just use the ones we need.

The below example starts with the `Person` interface with all required properties, which we pass as the first argument into the `Pick` mapped type when defining `person`.

The second argument expressed as `K extends keyof T` allows us to pass in known properties on the passed in object separated by `|` a union and pick only the props we want to use.

```ts
interface Person {
  name: string;
  age: number;
  title: string;
}

// Built into TypeScript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const person: Pick<Person, "name" | "age"> = {
  name: "Dave",
  age: 23,
};
```

---

### “Record” Mapped Type

The TypeScript `Record` mapped type allows us to construct dictionaries (objects or objects), however we need the following criteria:

1. A list of top level properties
2. All second level objects need to have the same structure

Here is the pattern:

```ts
type Record<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

Example:

```ts
type TopLevelProps = "user" | "current_user" | "user_public" | "timeline";

interface SecondLevelProps {
  href: string;
  type: string;
}

type Links = Record<TopLevelProps, SecondLevelProps>;

const links: Links = {
  user: {
    href: "url",
    type: "abc",
  },
  current_user: {
    href: "url",
    type: "abc",
  },
  user_public: {
    href: "url",
    type: "abc",
  },
  timeline: {
    href: "url",
    type: "abc",
  },
};
```
