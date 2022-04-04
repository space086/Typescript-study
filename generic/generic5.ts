//05. Generics Class
class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name:T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("mark", 39);
//new Person<string>(39);

//오류? : 문자와 숫자로 타입을 지정했는데, 문자 타입으로 넣어서
new Person<string, number>("mark", "age")

