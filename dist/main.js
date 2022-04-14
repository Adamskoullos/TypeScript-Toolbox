"use strict";
console.log("Firing !!!!!!!!!!!!!!");
const person = {
    name: "Dave",
    age: 23,
};
function getProperty(obj, key) {
    return obj[key];
}
const personName = getProperty(person, "name");
console.log(personName);
