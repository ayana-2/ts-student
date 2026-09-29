// ARRAYS TUPLES & ENUMS

// 1. Arrays in TypeScript
// An Array stores Multiple Values in a Single Variable.

// JS
let num = [10,20,30,40];

// In TS
let numb: number[] = [10,20,30,40];

// 2. String Arrays
let students: string[] = [
    "Ayana",
    "Meera",
    "Arjun",
    "Baanu"
];

// Access Values using Index Number

console.log(students[0]);
console.log(students[1]);

// 3. Another Way To Define Arrays
// TypeScript Provides Another Syntax

let numbers: Array<number> = [10,20,30,40];

// Both Are Equal

// 4. Type safety in Arrays
let marks: number[] = [80,75,90];
marks.push(95);

// marks.push("100");  // Error

// 5. Array Methods

// 1. push()
// Adds an Element

let numbe: number[] = [10,20,30,40];
numbe.push(50);
console.log(numbe);

// 2. pop()
// Removes The Last Element

numbe.pop();

// 3. shift()
// Removes The First Element

numbe.shift();

// 6.For of the Arrays
let stud:  string[] = [
    "Ambu",
    "Chinmay",
    "Mayoogha"
];
for (let s of stud) {
    console.log(s);
}

// 7. map() in TS
let number: number[] =[1,2,3,4,5];
let modified: number[] = number.map(
    (num: number): number => {
        return num * 2;
    }
);
console.log(modified);

// 8. filter() i TS 
let numberz: number[] = [10,20,30,40,50];

let result: number[] = number.filter(
    (num: number): boolean => {
        return num > 20;
    }
);
console.log(result);

// 9.Readonly Arrays 
const numm: readonly number[] = [10,20,30,40];
numbers.push(40);

// 10. Mixed-Type Arrays 

let data: (string | number)[] =[
    "Revin",
    27,
    "PFS",
    100
];
// data.push(true);

// 11. TUPLES
// A tuple is a Different from a nuormal Array 
// A tuple allows us to the exact number and number and order of elements 

// Example 
let student: [string , number] = [
    "Rahul",
    22
];
console.log(student[0]);
// return string 
console.log(student[1]);
// return number 

// 12. Tuple example 
let employee: [string, number, string] = [                  
    "Priya",
    22,
    "Developer"
];

// 13. Array Vs Tuple 
// Array 
let numbersz: number[] = [10,20,30,40];

// number of elements can vary 
// Tuple 
let studentz: [string, number] =[
    "kevin",
    22
];

// structure is fixed

// Array	                                 Tuple
// Multiple values of a type	        Fixed structure
// Number of elements can vary	        Fixed positions
// number[]                         	[string, number]
// Same general type	                Can have different types

// 14. Optional Tuple Elements 
// A tuple can have a optical elements 

let s: [string, number, string?];

s= ["kokul", 22];
s= ["meera", 22, "PFS"];

// 15'Named Tuples 
let student_details: [
    name: string,
    age: number,
    course: string
] = [
    "Kokul",
    25,
    "Java"
];

// 16.Enums 
// An enum is used to define a set of named choice 

// example 
enum Direction {
    North,
    South,
    East,
    West
}
console.log(Direction.North);
console.log(Direction.South);

// 17. Numberic Enum ( takes default values )
enum Status {
    Pending,
    Approved,
    Rejected
}
let currentStatus: Status = Status.Pending;
console.log(currentStatus);

// 18. Custom Enum Values 
enum CustomStatus {
    Pending = 1,
    Approved = 2,
    Rejected = 3
};

// 19. String enum 
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Developer = "DEVELOPER",
    Tester = "TESTER"
}


// 20. Enum With Function 
// we can pass an enum to a 

function checkRole(role: Role): void {
    console.log(`current role: ${role}`);
}
checkRole(Role.Tester)
