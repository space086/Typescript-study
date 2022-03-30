//2. generic basic

function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

// 2-1. 타입을 직접 지정하는 경우.
helloBasic<string, number>("mark", 39);

// 2-2. 타입을 지정하지 않는 경우
//  - 값에 따라 추론됌. 추론 규정에 따라, 타입스크립트는 가장 좁은 범위 타이핑을 추론해서 36으로 추론함. (number로 추론되지 않는 이유)
helloBasic(36, 39);