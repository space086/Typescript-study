//06. interface extends interface
//interface끼리 상속할때

interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "이은희",
  city: "서울",
};

HTMLDivElement