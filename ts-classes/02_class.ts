//02. Quick Start - class
/*

1. class 키워드를 이용하여 클래스를 만들 수 있다.
2. class  이름은 보통 대문자를 이용한다.
3. new 를 이용하여 class 통해 object를 만들 수 있다.
4. constructor 를 이용하여 object 를 생성하면서 값을 전달할 수 있다.
5. this를 이용해서 만들어진 object를 가리킬 수 있다.
6. js로 컴파일되면 es5의 경우 function 으로 변경된다.

*/

class Person {
  name;
  constructor(name: string){
    this.name= name
  }
}

const p1 = new Person("space");

console.log(p1);

