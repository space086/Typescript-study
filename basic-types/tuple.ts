//tuple

let x: [string, number];

x = ["Hello", 39];

// x = [10, "Mark"];

// x에는 2 이후로는 값을 할당할 수 없도록 타입이 언디파인드 되어있다.
// x[2] = "world";


// tuple 로 지정
const person: [string, number] = ["mark", 39];

//  분해 할당
const [first, second] = person;

// third 는 undefined 이므로 오류뜸.
// const [first, second, third] = person;