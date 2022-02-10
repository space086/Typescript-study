//any
// 어떤 타입이어도 상관없는 타입
// 이걸 최대한 쓰지 않는게 핵심
// ∵ 컴파일 타임에 타입체크가 정상적으로 이뤄지지 않기 때문
// 컴파일 옵션중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다.
//   - noImplicitAny
// 계속해서 개체를 통해 전파된다.
// 모든 편의는 타입 안전성을 잃는 대가로 온다는 것
// 타입 안전성은 typescript 를 사용하는 주요동기 중 하나이며, 필요하지 않은 경우에는 any를 사용하지 않도록 해야한다.

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
};

const c = leakingAny({ num: 0 });
// c.indexOf("0");