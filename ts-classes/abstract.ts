//Abstract classes

abstract class AbstractPerson {
  protected _name: string = "mark";

  abstract setName(name: string): void;
}

//new AbstractPerson()

class Person5 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person5();
p.setName();