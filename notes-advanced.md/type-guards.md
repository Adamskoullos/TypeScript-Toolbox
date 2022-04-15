## Exploring Type Guards

### “typeof” and Type Guards

```ts
if (typeof prop.name === "string") {
}
```

---

### “instanceof” and Type Guards

```ts
if (item instanceof SomeClassName) {
}

if (item instanceof Array) {
}
```

---

### User Defined Type Guards

The below `isSong` function is a user defined type guard that returns a boolean.
`item is Song` comes into play if the boolean returns true, this then lets TypeScript know that item is an instance of Song. This means that within the if statement and thereafter TypeScript knows what item is.

```ts
class Song {
  constructor(public name: string, public duration: number) {}
}
class Playlist {
  constructor(public title: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return item instanceof Song;
}

function getItemName(item: Song | Playlist): string {
  if (isSong(item)) {
    return item.name;
    // item = Song
  }
  return item.title;
  // item = Playlist
}
```

---

### Literal Type Guards and “in” Operator

```ts
if ("propertyName" in myObject)
  // or
  function isSong(item: any): item is Song {
    return "title" in item;
  }
```
