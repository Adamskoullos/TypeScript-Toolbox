"use strict";
console.log("Firing !!!!!!!!!!!!!!");
class Pizza {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class List {
    constructor(list) {
        this.list = list;
    }
    addItem(item) {
        this.list.push(item);
    }
    getList() {
        return this.list;
    }
}
const list = new List([]);
list.addItem(new Pizza("Cheese", 25));
list.addItem(new Pizza("Ham", 15));
console.log(list.getList());
