//never

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop():never {
  while (true) {}
}

// never 타입은 모든타입의 서브타입이며, 모든 타입에 할당 할 수 있습니다.
// 하지만, never에도 그 어떤 것도 할당 할 수 없습니다.
// any 조차도 never 에게 할당할 수 없습니다.
// 잘못된 타입을 넣는 실수를 막고자 할 떄 사용하기도 합니다.

declare const a: string | number;

if (typeof a !== 'string') {
  a;
}

type Indexable<T> = T extends string ? T & {[index: string]: any } : never;

// type ObjectIndexable = Indexable<{}>;
// const b: Indexable<{}> = '';