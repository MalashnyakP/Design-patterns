class Singleton {
  private static instance: Singleton;

  private constructor(public id: number, private _pr: string) {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(1, "qq");
    }

    return Singleton.instance;
  }

  public get pr() {
    return this._pr;
  }

  public doSomething() {
    console.log("work");
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

//const newS = new Singleton(); error

console.log(s1 === s2, s1.id === s2.id, s1.pr === s2.pr);
s1.doSomething();
s2.doSomething();
