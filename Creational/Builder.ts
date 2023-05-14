class Person {
    public name: string;
    public age: number;
    public address: string;
  
    constructor(builder: PersonBuilder) {
      this.name = builder.name;
      this.age = builder.age;
      this.address = builder.address;
    }
  
    public introduce(): void {
      console.log(`My name is ${this.name}. I'm ${this.age} years old. I live at ${this.address}.`);
    }
  }
  
  class PersonBuilder {
    public name: string;
    public age: number;
    public address: string;
  
    public setName(name: string): PersonBuilder {
      this.name = name;
      return this;
    }
  
    public setAge(age: number): PersonBuilder {
      this.age = age;
      return this;
    }
  
    public setAddress(address: string): PersonBuilder {
      this.address = address;
      return this;
    }
  
    public build(): Person {
      return new Person(this);
    }
  }
  
  const person = new PersonBuilder()
    .setName("John Doe")
    .setAge(25)
    .setAddress("123 Smth St")
    .build();
  
  person.introduce(); 
  