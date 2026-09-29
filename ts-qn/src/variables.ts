// let usernane: string = "Diya";

// the syntax is:
// let variableName: type = Value;

// 2. Type Annotation 
// What is Type Annotation?
// Type annotation means explicitly telling TypeScript what
// type  of value a variable should contain 

let name: string = "Ayana";
let age: number = 22;
let isStudent: boolean = true;

console.log(name);
console.log(age);
console.log(isStudent);

// 3. Type inference 
// TypeScript doesn`t always require us to write the type 
// 
let username = "Anu";
let user_age = 21;
console.log(username);

// TypeScript automatically understands

// username => string 
// age => number 
// this is called type inference

// example
let city = "Malappuram";

// TypeScript sees: 'Malappuaram' and automatically infers 
// city => string 
// so:
// city = 100;

// 4. Type Annotation vs Type inference 
// Explicit
// let age: number = 25;
// we applicity tell TS: age is a number 

// inference
// let age = 25;
// TS automatically understands: age is a number 

// Annotation = we tell TS the type. 
// inference => TS tells itself the type 

// 5. let,const, and var 
// let 
// let age: number = 21;
// age = 26;
// Reassign Allowed 
// const 
// const country: string = "Bahrain";
// cannot reassign 
// country = :"USA"; error
// use const when the variable should not be reassigned 

// var 
// var score: number = 100;
// it works, but in modern TS JS,prefere: Let & const instead of var 

// 6.string 
let firsrName: string = "Rahul";
let lastName: string = "Raj";

// or template literals: `hellooo`

// template Literal eg=>
// let name: string = "Mayoogha";
// let age: number = 26;
// console.log(`my name is ${name} and I am ${age} years old.`);

// 7. Number 
// TS has one main numeric type 
// number 
// example 
// let age: number = 21;
// let price: number = 1000000;
// let temperature: number = -5;
// all are numbe:

// 8.Boolean 
// boolean contains only: true / false 

// example 
// let isLoggedIn: boolean = true;
// let isAdmin: boolean = false;

// 9. Arrays 
// arrays can contain multiple value of the same type 
// syring array 
// let students: string[] = ["Rahul", "Anu","Ammu"];

// number Array 
let marks: number[] = [
    80,
    75,
    90
];
// boolean Array 
let results: boolean[] =[
    true,
    false,
    true
];
// Alternative Array Syntax
// instead of
// let student: string[] = ["Anuraj","anbu"];

// let students:Array<string> = ["anuuy","rajiv"];

// 10. Array of 