const user = {
    name: "Dave",
    age: 20,
    getMessage() {
        return `Hello ${this.name}`;
    },
};
console.log(user.getMessage());
