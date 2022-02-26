// 04. 접근 제어자 (Access Modifiers)
/*
1. 접근 제어자에는 public, private, protected 가 있다.
2. 설정하지 않으면 모두 public 이다.
3. 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다.
4. private 로 설정하면 클래스 외부에서 접근할 수 있다.
5. 자바스크립트에서 private 을 지원하지 않아 오랫동안 프로퍼티나 메서드 이름 앞에 언더바를 붙여서 사용했다.
*/

class Person3 {
  public name: string = "space";
  private _age!: number;

  public constructor(age: number) {
    if(age === undefined) {
      this._age = 20;
    } else {
      this._age = age;
    }
  }
  public async init() {}
}

const p3: Person3 = new Person3(30);
console.log(p3);