"use strict";
console.log("Firing !!!!!!!!!!!!!!");
const el = document.querySelector(".app");
function handleClick(event) {
    event.preventDefault();
    console.log(this);
}
el?.addEventListener("click", handleClick);
