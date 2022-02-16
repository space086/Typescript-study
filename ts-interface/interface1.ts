//interface
/*
내부적인 것과 관계없이 외부적으로 드러나는 객체의 사용방식이 적혀있는 타입
*/

interface Person1 {
  name: string; 
  age:number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1 : Person1 ={
  name: 'mark',
  age: 39,
};

hello1(p1);
