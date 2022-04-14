## Understanding and Typing "this"

By default:

1. When `this` is used within a single function `this` represents the global window
2. WHen used within an object, `this` represents the `Object`
3. When used within a `Class`, `this` represents the `Class`

---

### call - bind - apply

`call` and `apply` invoke `myFunc` with the object to be bound to passed in as the first argument.

`bind` does not invoke `myFunc`, instead it binds `myFunc` to `myObj`

```js
// call
myFunc.call(myObj, "one", "two");

// apply
myFunc.apply(myObj, ["one", "two"]);

// bind
const boundFunc = myFunc.bind(myObj);
boundFunc("one", "two");
```

> Arrow function do not bind the `this` keyword

### Typing `This` and `noImplicitThis`

In the below example the `This` keyword is passed in as the first argment with the `event` being the second. As `This` is a nHTML element we can give `This` a specific HTML `type` and also the event as type `Event`.

If we do not pass `This` as the first argument and assign a type, we cannot use it within the function.

```ts
const el = document.querySelector(".app");

function handleClick(this: HTMLDivElement, event: Event) {
  event.preventDefault();

  console.log(this);
}

el?.addEventListener("click", handleClick);
```
