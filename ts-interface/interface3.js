"use strict";
//03. optional property (2)
//[index:string]: any; -> 어떤 이름의 프로퍼티가 와도 괜찮다는 뜻
function hello3(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p31 = {
    name: "Mark",
    age: 39,
};
const p32 = {
    name: "Anna",
    sisters: ["sung", "chan"],
};
const p33 = {
    name: "Merong",
    father: p31,
    mother: p32,
};
