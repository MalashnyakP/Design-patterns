interface IClonable {
  clone();
}

class Prototype implements IClonable {
  public selfRef = this;

  constructor(public id: number, private _prField: string, public obj) {}

  public get prField() {
    return this._prField;
  }

  clone() {
    const clone = Object.create(this);
    clone.obj = Object.create(this.obj);
    clone.selfRef = Object.create(clone);

    return clone;
  }
}

const prot = new Prototype(1, "pr", {
  a: 13,
  call: () => {
    return "hello";
  },
});
const prot1 = prot.clone();
prot1.obj.a = 1;
console.log(prot1.obj.call(), prot1.obj.a, prot.obj.a);

console.log(prot === prot1); //false
console.log(prot.id === prot1.id); //true
console.log(prot.prField === prot1.prField); //true
console.log(prot.obj === prot1.obj); //false
console.log(prot.selfRef === prot1.selfRef); //false
console.log(prot1.obj.call() === prot.obj.call()); //true
