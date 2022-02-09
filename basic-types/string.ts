//string
// 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 string 형식을 사용
// javascript와 마찬가지로, typescript는 문자열 데이터를
// 둘러싸기 위해 큰 따옴표나 작은 따옴표를 사용.

let myName: string = "Mark";

myName = "Anna";

// template String
// - 행에 걸쳐있거나 , 표현식을 넣을 수 있는 문자열
// - 이 문자열은 backtick(=backquote) 기호에 둘러쌓여 있습니다.
// - 포함된 표현식은 `${expr}` 와 같은 형태로 사용

let fullName: string = "Mark Lee";

let age: number = 39;

let sentence: string = `hello my name is ${ fullName}.

I'll be ${age+1} years old next month.`

console.log(sentence);
