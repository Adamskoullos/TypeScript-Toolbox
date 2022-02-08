# TypeScript-Toolbox

- [Setup](#Setup)
- [Variables](#Variables)
- [Functions](#Functions)
- [Objects](#Objects)
- [Interfaces](#Interfaces)
- [Union Operator](#Union-Operator)
- [Type Aliases](#Type-Aliases)

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
