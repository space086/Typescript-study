//02. optional property (1)
//~?: 의도적으로 객체에 프로퍼티가 있을 수도, 없을 수도 있을 떄 사용.

interface Person2 {
  name: string;
  age?:number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

hello2({name: "mark", age: 39 });
hello2({name: "anna"});

