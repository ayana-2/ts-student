// 1. WHAT ARE GENERICS?

// What Are Generics?

// Generics Allows us to create reusable code that works with
// different data types without losing type safety


// 2. WHY DO WE NEED GENERICS?

// Why do We Need Generics

function getNumber(value: number): number {
    return value;
}

// It Works Only With number.

console.log(getNumber(100));

// But What if we want to pass a string?
// console.log(getNumber("Helloo"));

// we could create another function:

function getNumberr(value: string): string {
    return value;
}

// This creates duplicate code.
// Generics solve This problem.


// 3. BASIC GENERIC SYNTAX

function functionName<T>(value: T): T {
    return value;
}

// <T> is a type parameter used to represent type


// 4. GENERIC FUNCTION

function identify<T>(value: T): T {
    return value;
}

// now the same function can work with different types


// Number

let result = identify<number>(100);
console.log(result);


// String

let result2 = identify<string>("helloo");
console.log(result2);


// one function works with multiple types


// 5. UNDERSTANDING <T>

// function identity<T>(value: T): T

// <T> → creating a type parameter
// value: T → parameter can be any type
// : T → return value will be the same type


// 6. GENERIC TYPE INFERENCE

// Type Inference

let resul = identify(100);

// TS automatically understands: T = number

let name = identify("diya");
let Status = identify(true);

// this is called type Inference


// usually prefer

// identify(100);


// Explicit Type

// identify<number>(100);


// when TS can infer the the type correctly


// 7. GENERIC FUNCTION WITH ARRAY

// Generic are very useful with arrays


// Entire Array

function getArray<T>(items: T[]): T[] {
    return items;
}

let Arr = getArray([10,20,30,40]);
console.log(Arr);


function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}


// Number Array

let firstNumber = getFirst([10,20,30]);
console.log(firstNumber);


// String Array

let firstName = getFirst(["john","David","Gokul"]);
console.log(firstName);


// 8. WHY NOT USE ANY?

// Example

// function getFirst(items: any[]): any {
//     return items[0];
// }


// this works but it loose type safety


// example

// let result = getFirst([10,20,30]);


// bcz the return type is any
// TS doesnt know the rsult is a number


// with generic

// function getFirst<T>(type: T[]): T {
//     return items[0]
// }


// TypeScript knows:

// number[] → number
// string[] → string
// boolean[] → boolean


// 9. IMPORTANT DIFFERENCE

// any

// Loses type safety
// Flexible
// Type information is lost
// Less safe
// Avoid when possible


// Generics

// Maintains type safety
// Flexible
// Type information is preserved
// More safe
// Recommended for reusable typed code


// 10. GENERIC FUNCTION WITH MULTIPLE PARAMETERS

// we can use multiple type parameters

function pair<T, U>(first: T, second: U) {
    return {first,second};
}


// Usage:

let resultt = pair("Age",25);
console.log(resultt);


// Another example

let resul2 = pair(10, true);
console.log(resul2);


// 11. GENERIC ARROW FUNCTION

const identifyArrow = <T>(value: T): T => {
    return value;
};


// usage:

console.log(identifyArrow(100));
console.log(identifyArrow("Hello"));
console.log(identifyArrow(true));


// 12. GENERIC WITH OBJECTS

// Suppose We Have

function printData<T>(data: T): T {
    return data;
}


// we can pass an Object

const student = {
    name: "Meera",
    age: 22
};

let res = printData(student);

console.log(res);
console.log(res.age);


// 13. GENERIC INFERENCES

// Generic can also be used with interface


// example

interface Box<T> {
    value: T;

}


// Now we can create different type of boxes


// Number Box

let numberBox: Box<number> = {
    value: 100
};

console.log(numberBox);


// The same interface can works with different types


// 14. GENERIC TYPE ALIAS

type ResponseData<T> = {
    data: T;
    status: number;
};


// Now

let userResponseData: ResponseData<string> = {
    data: "User data",
    status: 200
};

let numberResponse: ResponseData<number> = {
    data: 100,
    status: 200
};

console.log(numberResponse);


// 15. GENERIC WITH REAL OBJECTS

// consider an API Response


// usually an API Response may look like

// {
//     data: .........,
//     status: 200
// }


// But data can be different type example


interface ApiResponseData<T> {
    data: T;
    status: number;
};


// User Response

interface UserData {
    id: number;
    name: string;
};


const response: ApiResponseData<UserData> = {
    data: {
        id: 1,
        name: "Ayaan"
    },
    status: 200
};


// Now

console.log(response.data.name);


// TS Know that

// response.data is a user


// 16. GENERIC VS UNION

// Union

function print(value: string | number) {
    console.log(value);
}


// It means

// The Value can be either string OR number


// Generic

function identifi<T>(value: T): T {
    return value;
}


// it means whatever type comes in preserve that same type


// example

let resu = identifi(100);

let resu1 = identifi("Hello");


// For example:

// let result = identity(100);

// let result1 = identity("Hello");


// 17. KEY DIFFERENCE

// Union

// Allows predefined types
// string | number
// Good for alternatives


// Generic

// Works with many types
// T
// Good for reusable code


// 18. IMPORTANT GENERIC SYNTAX

// Generic Function

function test<T>(value: T): T {
    return value;
}


// Multiple Types

function tesst<T, U>(a: T, b: U) {
    return { a, b };
}


// Generic Interface

interface Box2<T> {
    value: T;
}


// Generic Type

type Result<T> = {
    data: T;
};


// 19. EXAMPLE REUSABLE API RESPONSE

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
};


// user

interface User {
    id: number;
    name: string;

};


// Product:

interface Product {
    id: number;
    name: string;
    price: number;
};


// user response

const userResponse: ApiResponse<User> = {
    data: {
        id: 1,
        name: "Ravina"
    },
    status: 200,
    message: "Success"
};


// 20. PRODUCT RESPONSE

const productResponse: ApiResponse<Product> = {
    data: {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    status: 200,
    message: "Success"
};

console.log(productResponse);
console.log(productResponse.data.name);
console.log(productResponse.data.price);










    // QUESTION 
// 25. STUDENT EXERCISES


function identity<T>(value: T): T {
    return value;
}

// Number
let num = identity(100);
console.log(num);

// String
let text = identity("Hello");
console.log(text);

// Boolean
let check = identity(true);
console.log(check);