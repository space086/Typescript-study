//undefined & null
// typescript에서, undefined 와 null을 실제로 각각 타입을 가짐.
// void와 마찬가지로 그자체로 그다지 유용하지 x
// 둘다 소문자만 존재.

// 설정하지 않으면 모든 다른 타입의 서브타입이 될 수 있다.
// 즉, number에 null 또는 undefined를 할당할 수 있다는 의미
// 하지만, 컴파일 옵션(tsconfig)에서 `--strictNullChecks` 사용하면,
// null 과 undefined 는 void 나 자기자신들에게만 할당할 수 O
  // 이 경우, null과 undefined를 할당할 수 있게 하려면, union type을 이용

// let Myname: string = null;

// let u:undefined = null;

let v: void = undefined;

let union: string | null = null; // 유나온타입 사용 = 합집합 같은 논리라고 생각.

union = "mark"

// null in javascript
// null이라는 값으로 할당된 것을 null이라고 합니다.
// 무언가가 있는데 , 사용할 준비가 덜 된 상태.
// null 이라는 타입은 null 이라는 값만 가질 수 있습니다.
// 런타임에서는 typeof 연산자를 이용해서 알아내면, object입니다.

// undefined in javascript
// 값을 할당하지 않은 변수는 undefined 라는 값을 가집니다.
// 무언가가 아예 준비되지 않은 상태
// object 의 property 가 없을 때도 undefined 입니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, undefined 입니다.