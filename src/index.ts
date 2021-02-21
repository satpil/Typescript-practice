// string
let Name: string = "john";
Name = 3;

// number
let age: number = 12;
age = "jack";

// boolean
let flag: boolean = true;
flag = "sa";

// assign type

let assignType: number;
assignType = "22";
assignType = 22;

//array
let att: any[] = ["sat", "okl"];
att = "sas";

//tuples
let token: [string, number] = ["sas", 23];

//enum
enum color {
  green,
  red = 100,
  blue
}
let pattern: color = color.blue;
console.log(pattern);

//any
let ko: any = "mk";
ko = { sa: 9, lp: "sa" };

//function
function myFunn(): string {
  return age;
}
console.log(myFunn());

//void
function myVoid(): void {
  console.log("sa");
  return Name;
}
console.log(myVoid());

//argument
function myVoid2(val1: number, val2: number): number {
  return val1 * val2;
}
console.log(myVoid2(2, 2));

// function type
let myNum: (a: number, b: number) => number;
myNum = myVoid;
console.log(myNum());
myNum = myVoid2;
console.log(myNum(2, 8));

//object
let object: { name: string; age: number } = {
  name: "satish",
  age: 25
};
object = { name: "sa", age: 25 };

//type
type Complex = { data: number[]; output: (all: boolean) => number[] };
const complex2: Complex = {
  data: [12, 45, 455],
  output: function (all: boolean): number[] {
    return this.data;
  }
};

//union type
let realage: number | string = 27;
realage = 25;

//chexk type
let checkType = 255;

if (typeof checkType === "number") {
  console.log("test");
}

//never
function never(): never {
  throw new Error("new error");
}

//exercise
type bankaccount = { money: number; deposit: (value: number) => number };
type myself2 = { name: string; bankaccount: bankaccount; hobbies: string[] };
let bankoccount: bankaccount = {
  money: 1245,
  deposit(value: number): number {
    return (this.money += value);
  }
};

let myself: myself2 = {
  name: "allsl",
  bankaccount: bankoccount,
  hobbies: ["sport", "cooking"]
};
myself.bankaccount.deposit(3000);
console.log(myself);

//class
// class Person {
//  name: string;
//  protected age: number = 25;
//  private type: string;

//  constructor(name:string,public username: string){
//    this.name = name
//  }
// }

// const person = new Person('sa','Sa')
// console.log(person)

//namespace

namespace Person {
  export let callPerson = (name: string): string => {
    return name;
  };
}
const name = "nama";
console.log(Person.callPerson("satish"));
console.log(name);

//interface

interface myName {
  name: string;
  age?: number;
  [propName: string]: any;
}

function Person(person: myName) {
  return person.name;
}

const PersonObject = {
  name: "satish",
  age: 25,
  hobbies: 25
};

console.log(Person({ name: "sa", hobbies: 25 }));

//generic

function generic<T>(data: T) {
  return data;
}
console.log(generic("sarinf").length);
console.log(generic<number>(45));
console.log(generic({ name: "sa", age: 45 }));

//build in generic
let arrray: Array<number> = [15, 56];
arrray.push(56);
arrray.push("sas");
