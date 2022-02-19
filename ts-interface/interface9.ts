//09. type alias vs interface
/*
#function
  -type alias
    type EatType = (food:string) => void;

  - interface
    interface IEat {
      (food:string): void;
    }
#array
  -type alias
    type PersonList = string[];

  - interface 
    interface IPersonList {
      [index: number]: string;
    }

#intersection

interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}

interface ArtistsData {
  artist: {name: string}[];
}
  -type alias
    type ArtistResponseType = ArtistsData & ErrorHandling;

  - interface 
    interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;

#union type

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType {}
class Pet implements PetType {}

=> 유니온 타입은 인터페이스 상속 x , 클래스한테 implements 넣어줄 수 x

# Declaration Merging - interface
 interface MergingInterface {
   a: string;
 }
 interface MergingInterface {
   b: string;
 }

 let mi: MergingInterface;
 mi.
 => mi 안에는 a,b값이 병합 되어있음.

 -타입 알리아스에는 불가능함. 동일한 이름으로 값을 재할당할 수 없음.
*/
