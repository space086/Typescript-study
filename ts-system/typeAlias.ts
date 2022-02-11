/* 
타입별칭 (type alias)

- interface랑 비슷함
- primitive, union type, tuple, function
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있음
- 만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는 것이 아님.

*/

// Aliasing Primitive
type MyStringType = string;

const str = 'world';

// mystr은 string타입을 알리아싱한 타입으로 지정함
let myStr: MyStringType = 'hello';
myStr = str;

// Aliasing Union Type (가장 많이 쓰이는 타입)
let person: string | number = 0;
person = 'mark';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anna'

/*
1. 유니온 타입은 A도 가능하고 B도 가능한 타입
2. 길게 쓰는걸 짧게
*/

// 3. Aliasing Tuple

let person1: [string, number] = ['mark', 35]
type PersonTuple = [string, number];
let another1: PersonTuple = ['Anna',24];

/*
1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
*/

// 4. Aliasing Function
type EatType = (food: string) => void;


/*
typeAlias vs interface 

1. 타입으로서 목적이나 존재가치가 명확하면 -> interface
2. 단순한 지칭이나 별명으로 부르기 위함이면 -> alias

*/