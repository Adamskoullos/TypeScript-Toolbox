# TypeScript-Toolbox

- [Setup](#Setup)
- [Variables](#Variables)
- [Functions](#Functions)
- [Objects](#Objects)
- [Interfaces](#Interfaces)
- [Union Operator](#Union-Operator)
- [Type Aliases](#Type-Aliases)
- [Unions and Type Aliases](#Unions-and-Type-Aliases)
- [Void](#Void)
- [Unknown & Type Assertion](#Unknown-&-Type-Assertion)
- [Working with the DOM](#Working-with-the-DOM)
- [Working with Classes](#Working-with-Classes)
- [Inheritance](#Inheritance)

---

## Setup

1. install TypeScript (Linux): `sudo apt install node-typescript`
2. `/src` > to write application TS files
3. `/dist` > output folder where TS code is transpiled into JS
4. `tsconfig.json`> set up a basic config file:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "target": "esnext",
    "watch": true,
    "lib": ["dom", "ES2017"]
  }
}
```

5. Launch the compiler: `tsc -w`

---

## Variables

```ts
let firstName: string = "Barry";
```

---

## Functions

```ts
const getFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};
```

---

## Objects

```ts
const user: { name: string; age: number } = {
  name: "Dave",
  age: 20,
};
```

---

## Interfaces

Rather than specifying the the user type each time we can create an `interface` and instead reference the interface when creating new objects.
In this case the type of the created object will be the interface `UserInterface` rather than object. We can make properties optional using `?`:

```ts
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Dave",
  age: 20,
  getMessage() {
    return `Hello ${this.name}`;
  },
};
```

---

## Union Operator

1. Multiple data type options:

```ts
let pageNumber: string | number = "1";
```

2. Set default value:

```ts
let user: object | null = null;
```

Using the Union operator with interfaces:

```ts
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

let user: UserInterface | null = null;
```

---

## Type Aliases

Rather than have general types like strings, we can give more specific type names and use the alias instead.
Each item in the `favFoods` array is of type `FavFood` which has been set as type string:

```ts
type ID = string;
type FavFood = string;

interface UserInterface {
  name: ID;
  age?: number;
  getMessage(): string;
}

const favFoods: FavFood[] = ["pasta", "cheese"];
```

---

## Unions and Type Aliases

```ts
type PolularTag = string;
type MaybePopularTag = PopularTag | null;
```

We can then create a property with the type `MaybePopularTag` and the value can be either of type `PopularTag` (string) or null:

```ts
const cakeTag: MaybePopularTag = "cake";
```

---

## Void

Functions that do not have a return value should be set to void, this is implicit but it is good to state. This provides an error if a return value is coded:

```ts
const myFunc = (): void => {
  console.log("this function does not return anything");
};
```

---

## Unknown & Type Assertion

We can initially set a property to type `unknown` which allows any type, however we cannot reassign a value of type unknown to another type:

```ts
let unknownVariable: unknown = 10; // unknown type but assigned a number which is ok

let reassignedVariable: string = unknownVariable; // Cannot reassign variable of type unknown to type string (this will cause an error)
```

However through `type assertion` we can change a property type:

```ts
let reassignedVariable: string = unknownVariable as string;
```

Type assertion can be used for any types, however we cannot directly change a string for a number, we first have to change to type `unknown:

```ts
let pageNumber: string = "1";

let numericPageNumber: number = pageNumber as unknown as number;
```

---

## Working with the DOM

When grabbing elements, TypeScript automatically assigns type `Element` to the element, however this does not give us access to specific element properties. In this situation we need to specifically tell TypeScript (using type assertion) which element it is in order to get access to its properties:

```ts
const inputElement = document.querySelector('.my-input) as HTMLInputElement;
```

now we would have access to the `inputElement.value` which is not available on the generic `Element` type.

#### Listeners

With the same principle as above, the `event` passed into the callback is the most generic (highest level class) event and in order to access specific element event properties we need to assign specific event.target elements. In the below example we assign event.target as an input element which gives us access to event.target.value:

```ts
const inputElement = document.querySelector('.my-input) as HTMLInputElement;

inputElement.addEventListener('change', (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

```

---

## Working with Classes

By default everything is `public`, however we can make properties and methods either `protected` or `private`.
We can also make properties `readonly`:

```ts
class User {
  protected firstName: string;
  private lastName: string;
  readonly unchangableName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Davey", "Dave");
```

#### Interfaces and Classes

We can ensure classes have shared properties or methods by implementing interfaces. In the example below the class must have the `getFullName()` method:

```ts
interface UserInterface {
  getFullName(): string;
}

class User implements UserInterface {
  protected firstName: string;
  private lastName: string;
  readonly unchangableName: string;
  static readonly maxAge: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Davey", "Dave");
```

#### Inheritance

```ts
class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const admin = new Admin("Ben", "Hogan");
```
