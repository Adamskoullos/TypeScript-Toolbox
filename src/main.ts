console.log("Firing !!!!!!!!!!!!!!");

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
