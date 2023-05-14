interface Observer {
  update(message: string): void;
}

class Subject {
  private observers: Observer[] = [];

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

class MessageDisplay implements Observer {
  public update(message: string): void {
    console.log(`Message Display: ${message}`);
  }
}

const subject = new Subject();
const display1 = new MessageDisplay();
const display2 = new MessageDisplay();

subject.subscribe(display1);
subject.subscribe(display2);
subject.notify("Button clicked!");

subject.unsubscribe(display1);
subject.notify("Button clicked again!"); 
