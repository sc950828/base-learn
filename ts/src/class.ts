class Animal {
  private name: string;
  public age: number;

  constructor(name: string) {
    this.name = name;
  }
}

const dog = new Animal("dog");
dog;
