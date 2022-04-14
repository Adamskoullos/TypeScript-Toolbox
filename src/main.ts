console.log("Firing !!!!!!!!!!!!!!");

const person = {
  name: "Dave",
  age: 23,
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "name");

console.log(personName);
