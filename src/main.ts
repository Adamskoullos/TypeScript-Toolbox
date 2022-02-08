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

console.log(user.getMessage());
