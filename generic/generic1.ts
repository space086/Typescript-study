function helloString(message: string): string {
  return message;
}
function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들

function hello(message: any):any {
  return message;
}

console.log(hello('mark'.length));
console.log(hello(39));

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('mark').length);
//.length 사용 불가능 ?: number에는 사용할 수 없음.
console.log(helloGeneric(39));
console.log(helloGeneric(true));