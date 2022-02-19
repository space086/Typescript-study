//08. Readonly Interface Properties
//변하지않고 고정된 값 앞에는 항상 "readonly"를 붙인다.

interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "mark",
  gender: "male",
};

// p81.gender = "female" 
// 오류 => readonly 때문에 값을 다시 할당할 수 없음.

