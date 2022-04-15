console.log("Firing !!!!!!!!!!!!!!");

class Pizza {
  constructor(private name: string, private price: number) {}
}

class List<T> {
  constructor(private list: T[]) {}

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

const list = new List<Pizza>([]);

list.addItem(new Pizza("Cheese", 25));
list.addItem(new Pizza("Ham", 15));

console.log(list.getList());
