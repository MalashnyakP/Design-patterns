interface MyIterator<T> {
  current(): T;
  next(): T;
  key(): number;
  valid(): boolean;
  rewind(): void;
}

interface Agregator {
  getIterator(): MyIterator<string>;
}

class StringIterator implements MyIterator<string> {
  private collection: StringCollection;
  private position: number = 0;

  constructor(collection: StringCollection, private reverse: boolean = false) {
    this.collection = collection;
    if (reverse) this.position = collection.count() - 1;
  }
  next(): string {
    const item = this.collection.getCollection()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }
  current(): string {
    return this.collection.getCollection()[this.position];
  }
  key(): number {
    return this.position;
  }
  valid(): boolean {
    if (this.reverse) return this.position >= 0;
    return this.position < this.collection.count();
  }
  rewind(): void {
    this.position = this.reverse ? this.collection.count() - 1 : 0;
  }
}

class StringCollection implements Agregator {
  private collection: string[] = [];

  public getCollection() {
    return this.collection;
  }

  public count() {
    return this.collection.length;
  }

  public add(item: string) {
    this.collection.push(item);
  }

  getIterator(): MyIterator<string> {
    return new StringIterator(this);
  }

  getReverceIterator(): MyIterator<string> {
    return new StringIterator(this, true);
  }
}

const collection = new StringCollection();
collection.add("first");
collection.add("second");
collection.add("third");

const iterator = collection.getIterator();
while (iterator.valid()) {
  console.log(iterator.next());
}

const reverceIterator = collection.getReverceIterator();
while (reverceIterator.valid()) {
  console.log(reverceIterator.next());
}
