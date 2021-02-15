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
type Complex = {data: number[],output:(all:boolean)=>number[]}
const complex2: Complex = {
  data: [12,45,455],
  output: function(all:boolean):number[]{
    return this.data
  }
}

//union type
let realage: number | string = 27;
realage=25

//chexk type
let checkType = 255;

if(typeof checkType === 'number'){
  console.log('test')
}

//never
function( never():never{
  throw new Error('new error');
  
}