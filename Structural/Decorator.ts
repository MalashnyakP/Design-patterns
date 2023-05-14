interface Coffee {
  getDescription(): string;
  getCost(): number;
}

class SimpleCoffee implements Coffee {
  public getDescription(): string {
    return "Simple coffee";
  }

  public getCost(): number {
    return 2.0;
  }
}

abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getDescription(): string {
    return this.coffee.getDescription();
  }

  public getCost(): number {
    return this.coffee.getCost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Milk`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 0.5;
  }
}

class SugarDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Sugar`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 0.2;
  }
}

class CaramelDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Caramel`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 0.8;
  }
}

let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription());
console.log(coffee.getCost());

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription());
console.log(coffee.getCost());

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription());
console.log(coffee.getCost());

coffee = new CaramelDecorator(coffee);
console.log(coffee.getDescription());
console.log(coffee.getCost());
