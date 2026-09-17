// 1. what is TypeScript?
// TypeScript is a superset of JavaScript that ads static typing to JavaScript.

// What is a Superset?
// JavaScript + TypeScript Features = TypeScript

// The JavaScript Program code woks in TypeScript 

// let fname = "Ayana";
// console.log(fname);

// But TypeScript allows us to to add types 

// let firstname: string = "Ayana";
// console.log(firstname);

// Why TypeScript?
// let age = 25; 
        // age => number 
    // age = "twenty five";
        // age =>string 
    
// JavaScript is dynamically typed.
// This can cause problems in large Applications.

// for example:-
// function calculateAge(age) {
//     return age + 5;
// }
// console.log(calculateAge("25"));
        // here "25" + 5 becoms string cocncatenation
    
// TypeScript Helps catch this kind of mistake  earlier 
// function calculateAge(age: number): number {
//     return age + 5 ;
// }
// console.log(calculateAge(25));

// JAVASCRIPT AND TYPESCRIPT  DIFFRENCE 

// JAVASCRIPT

// -> Dynamically typed 
// -> .js File
// -> Browser can execute directly 
// -> Type Checking Happens Mainly at Runtime 
// -> Easier to start 
// -> fewer type annotations 

// TYPESCRIPT 

// -> Statically Typed 
// -> .ts file
// -> Usually compiled/transpiled to JavaScript 
// -> Typ checking happens during development /compiled
// -> More Structured for large application 
// -> supports type annotations 

// TypeScript does not replace js insted:
// "TypeScript is JS With Additional Features,especially a type system",
// Which is then transformed into JavaScript that can run in environments such as browsers.

// Main Advantages of TS 
// 1. Static type Checking 
    // let age: number = 25;
        // this tells ts:age should contain a number 
    // age = "hello"; 
        // this is inncorrect
    
// 2. Better code completion
    // Editors suchj as VS code can understatnd the SVGUnitTypes. 
    // for example:-
        // let studentName: string = "Arun";

        // when you type:
        // studentName.(the editor knows thet this is a string and can suggest string method)

// 3. Easier debigging 
        // may errors are caught while writting the code insted of discovering then after running the application
    
// 4. Betters for large Projects
    // TS becomes particularly useful when application becomes lrge 
    // this is one reason it is commonly used with 
    // React + TS 
// 5. Is TS a completely different language?
    // No.
    // TS includes JS

    // FoR example: Normal JS
    // let x = 10;
    // if (x > 5) {
    //     console.log("Greater");
    // }

    // TS adds Adittional features such as:
        // let x: number = 10;
    // so 
        // JS+ TS+ Additional TS Features = TS
// 6. How does TS actually works 
    // Abrowser understand JS 
    // A browser does not normally executes TS Directly
    // suppose we create:
    // app.ts 
        // let age: number = 25;
        // console.log(age );
    // we cannot simply expect the browser to execute the TS syntax.
    // insted, TS is Transfoemed into JS 
    // app.ts > TS compiler . app.js > Browser => output 

// 8.What is transpilations 
    // transpilation means convering source code from one language /version into another 
    // related language / version.
// for TS 
    // TS > JS 

    // for example 
    // TS 
        let age: number 