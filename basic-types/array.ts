//array
// 원래 자바스크립트에서 array는 객체입니다.
// 사용방법
// - array<타입>
// - 타입[]

// 1.
// 보통 쓰이는 방법 
let list: (number | string)[] = [1,2,3, "4"]; 

// 2.
// 오류를 발생시킬 수 있기 때문에 사용을 권장하지 않음.
// let list: Array<number> = [1, 2, 3];