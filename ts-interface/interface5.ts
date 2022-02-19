//05. class implements interface
//객체지향에서 많이 쓰이는 방법

interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    // throw new Error("Method not implemented.");
    console.log;(`안녕하세요 ${this.name} 입니다.`);
  }
}

const person: IPerson1 = new Person("mark");
person.hello();