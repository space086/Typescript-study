//03. Generics Array & Tuple

//3-1. Array 형태
function helloArray<T>(message: T[]): T {
  return message[0];
}

// hello와 world의 공통 타입인 string으로 추론
helloArray(["hello", "world"]); 

// string | number 유니온 타입
helloArray(["hello",5]);

//3-2. Tuple 형태
function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

//string
helloTuple(["hello","world"]);

//<T는 string, 5는 number로 추론> 0번째 인덱스인 string 리턴
helloTuple(["hello",5]);