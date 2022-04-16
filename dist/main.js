"use strict";
console.log("Firing !!!!!!!!!!!!!!");
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "small";
    Sizes["Medium"] = "medium";
    Sizes["Large"] = "large";
})(Sizes || (Sizes = {}));
console.log(Sizes.Small); // small
let selected = Sizes.Small; // Using Sizes as a type and giving a default
const updateSize = (size) => {
    selected = size;
};
updateSize(Sizes.Large);
console.log(selected); // large
