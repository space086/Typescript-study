// 07. keyof & type lookup system
interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "mark",
  age: 39,
};

// IPerson[keyof IPerson]
// =>IPerson["name" | "age"]
// =>IPerson["name"] | IPerson["age"]
// =>string | number

function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key];
}

function setProp(
  obj: IPerson,
  key: "name"| "age",
  value: string | number): void {
  obj[key] = value;
}
