//03. constructor & initialize

/*
1. class 키워드를 이용하여 클래스를 만들 수 있다.
2. class  이름은 보통 대문자를 이용한다.
3. new 를 이용하여 class 통해 object를 만들 수 있다.
4. constructor 를 이용하여 object 를 생성하면서 값을 전달할 수 있다.
5. this를 이용해서 만들어진 object를 가리킬 수 있다.
6. js로 컴파일되면 es5의 경우 function 으로 변경된다.


@class

- 생성자 함수가 없으면, 디폴트 생성자가 불린다.
- 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 ! 를 붙여서 위험을 표시한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
- 생성자에는 async 를 설정할 수 없다.
(new를 쓸 때에는 바로 await를 사용할 수 없고 새로 함수를 만들어서 적용해야 한다.)
*/

class Person2 {
  name: string = "space";
  age: number;

  constructor(age: number) {
    this.age = age;
  }
  // constructor(age?: number) {
  //   if(age === undefined) {
  //     this.age = 20;
  //   } else {
  //     this.age = age;
  //   }
  // }
}

const a1 : Person2 = new Person2(39);
// const a2 : Person2 = new Person2();
console.log(a1);
console.log(a1.age);


