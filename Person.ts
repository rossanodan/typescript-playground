class Person {
  name: string;
  lastName: string;
  address: string | null;

  constructor(name: string, lastName: string, address?: string) {
    this.name = name;
    this.lastName = lastName;
    this.address = address ? address : null;
  }

  sayHello(): string {
    return `Hello everyone! My name is ${this.name} ${this.lastName}!`
  }
}

export default Person;
