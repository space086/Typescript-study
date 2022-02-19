//07. function interface
//인터페이스로 함수 표현하는 방법

interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  console.log(`안녕하세요 ${name} 입니다.`);
};

helloPerson("mark", 39)