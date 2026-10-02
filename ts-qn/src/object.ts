// TS Objects, Type Aliaces $ Interfaces

{
// 1.Object in TS 
// In js 
let student = {
    name:"arun",
    age: 21,
    course: "PFS"
};

// In TS 
let studen: {
    name: string,
    age: number,
    course: string
} = {
    name: "Arav",
    age: 22,
    course: "Data Analytics"
};

// 2. Accessing Object Properties 
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Modify Properties 
student.age = 23;
console.log(student.age);

}
{
// 3. Type Safety in Object 

// consider 
let stud: {
    name: string,
    age: number
} = {
    name: "Aravin",
    age: 22
};
stud.age = 23;
stud.age = 23;

}
{
// 4. Adding new Properties 
let studentDetails: {
    name: string,
    age: number
} ={
    name: "Aravin dev",
    age: 22
};

// studentDetails.course = "PFS";  // Error: course is not defined in this object type

// object Type doesnt contain a course properties 
}
{
//  5. Optional Properties 
// sometimes an object object properties may or may not exist 
// we use ?.

let student: {
    name: string,
    age: number,
    course?: string
} = {
    name: "Revin",
    age: 22
};

// hero course is optional 

let student2: {
    name: string;
    age: number;
    course: string;
} = {
    name: "ayana",
    age: 21,
    course: "Python"
};

}
{
// 6. ReadOnly Properties 
// suppose we dont want the student id to be changed 

let student: {
    readonly id: number;
    name: string;
} = {
    id:101,
    name: "Navin"
};
// This is Allowed:
student.name = "Arun";
console.log(student);
// // student.id = 102;  // Error: id is not defined in Student interface  error

}
{
// 7. Nested Object 
// object can contain another object 

let student: {
    name: string,
    age: number,
    address: {
        city: string;
        pincode: number;
    };
} ={
    name: "amrutha",
    age: 21,
    address: {
        city: "Malappuram",
        pincode:673645

    }
};

// access 
console.log(student.name);
console.log(student.address.city);
console.log(student.address.pincode);

}
{
// 8. Object With Array 

let student: {
    name: string;
    skills: string[];
} = {
    name: "aswin",
    skills:[
        "Python",
        "HTML",
        "Java"
    ]
};

// access 
console.log(student.skills[0]);

}
{
// 9. Object with Function 
// An object can also contain a function 

let student: {
    name: string,
    greet: () => string;

} = {
    name: "Rahul",

    greet: () => {
        return "Hello Guysssey!!";
    }
};

// calling 
console.log(student.greet());

}
{
// 10. why Do Need Type Aliases? 

// Example object structure:
// {
//     name: string;
//     age: number;
//     course: string;
// }

// suppose we need it in 10 places writing the same structure repeatedly is inconvineient 
// instead we can create a type alias 

}
{
// 11. Type Alias 

// syntax 
// Syntax: type TypeName = {
//     property: type;
// };

// example

type student = {
    name: string;
    age: number;
    course: string;
};

// now we can use it 

let name : string;
let student1: student = {
    name: "shovika",
    age: 24,
    course: "Java"
};

let student2: student = {
    name: "shovik",
    age: 25,
    course: "Java"
}; 

}
{
// 12. Type Alias With Function 
type Student = {
    name: string;
    age: number;
    course: string;
};

let displayStudent = (studen: Student): void => {
    console.log(studen.name);
    console.log(studen.age);
    console.log(studen.course);
}

// call 
displayStudent({
    name: "Gokul",
    age: 24,
    course: "pfs"

});

}
{
// 13.  Type Alias with Optional Property 
type Student ={ 
    name: string;
    age: number;
    course?: string;
};

let s1: Student = {
    name: "shivangi",
    age: 26
};
let s2: Student = {
    name: "shivangi",
    age: 26
};
console.log(s1);

}
{
// 14. Type Alias With readonly
type Student = {
    readonly id: number;
    name: string;
    age: number;
};

// example 

let studen: Student = {
    id: 101,
    name: "ravik",
    age: 25
};
console.log(studen.name);

}
{
// 15. Type Alias With Arrays 
type student = {
    name: string;
    skills: string[];
};

// example 
let student: student = {
    name: "Rahul",
    skills: [
        "Python",
        "Java"
    ]
};

}
{
// 16. Union Types 
// A union allows a value to have more than one possible type 


let id: string | number;

id = 101;
id = "ST101";

}
{
// 17. Union Type With Type Alias 

type ID = string | number;
let studentId: ID;

studentId = 101;
studentId = "ST101";

}
{
// 18. Interfaces An interface is another way to define the stucture of an object 

interface Student {
    name: string;
    age: number;
    course: string;
}

// Now 

let student: Student = {
    name: "vivek",
    age: 32,
    course:"PFS"
};

let std2 : Student = {
    name: "Miya",
    age:23,
    course:"PFS"
};

}
{
// 29. Interfaces with Optional Property 
interface Student {
    name: string;
    age: number;
    course?: string;
}

// now 

let student: Student = {
    name: "Rahul",
    age:22
};

// Is valid 

}
{
// 21 interface with readonly
interface Student {
    readonly id: number;
    name: string;
    age: number;
};

// example

let student: Student = {
    id: 101,
    name: "amu",
    age: 23
};

}
{
// 22.Interfaces With Function 

interface Student {
    greet(): string;
}

// TS Objects, Type Aliaces $ Interfaces

}
{
// 1.Object in TS 
// In js 
let student = {
    name:"arun",
    age: 21,
    course: "PFS"
};

// In TS 
let studen: {
    name: string,
    age: number,
    course: string
} = {
    name: "Arav",
    age: 22,
    course: "Data Analytics"
};

// 2. Accessing Object Properties 
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Modify Properties 
student.age = 23;
console.log(student.age);

}
{
// 3. Type Safety in Object 

// consider 
let stud: {
    name: string,
    age: number
} = {
    name: "Aravin",
    age: 22
};
stud.age = 23;
stud.age = 23;

}
{
// 4. Adding new Properties 
let studentDetails: {
    name: string,
    age: number
} ={
    name: "Aravin dev",
    age: 22
};

// studentDetails.course = "PFS";  // Error: course is not defined in this object type

// object Type doesnt contain a course properties 
}
{
//  5. Optional Properties 
// sometimes an object object properties may or may not exist 
// we use ?.

let student: {
    name: string,
    age: number,
    course?: string
} = {
    name: "Revin",
    age: 22
};

// hero course is optional 

let student2: {
    name: string;
    age: number;
    course: string;
} = {
    name: "ayana",
    age: 21,
    course: "Python"
};

}
{
// 6. ReadOnly Properties 
// suppose we dont want the student id to be changed 

let student: {
    readonly id: number;
    name: string;
} = {
    id:101,
    name: "Navin"
};
// This is Allowed:
student.name = "Arun";
console.log(student);
// // student.id = 102;  // Error: id is not defined in Student interface  error

}
{
// 7. Nested Object 
// object can contain another object 

let student: {
    name: string,
    age: number,
    address: {
        city: string;
        pincode: number;
    };
} ={
    name: "amrutha",
    age: 21,
    address: {
        city: "Malappuram",
        pincode:673645

    }
};

// access 
console.log(student.name);
console.log(student.address.city);
console.log(student.address.pincode);

}
{
// 8. Object With Array 

let student: {
    name: string;
    skills: string[];
} = {
    name: "aswin",
    skills:[
        "Python",
        "HTML",
        "Java"
    ]
};

// access 
console.log(student.skills[0]);

}
{
// 9. Object with Function 
// An object can also contain a function 

let student: {
    name: string,
    greet: () => string;

} = {
    name: "Rahul",

    greet: () => {
        return "Hello Guysssey!!";
    }
};

// calling 
console.log(student.greet());

}
{
// 10. why Do Need Type Aliases? 

// Example object structure:
// {
//     name: string;
//     age: number;
//     course: string;
// }

// suppose we need it in 10 places writing the same structure repeatedly is inconvineient 
// instead we can create a type alias 

}
{
// 11. Type Alias 

// syntax 
// Syntax: type TypeName = {
//     property: type;
// };

// example

type student = {
    name: string;
    age: number;
    course: string;
};

// now we can use it 

let name : string;
let student1: student = {
    name: "shovika",
    age: 24,
    course: "Java"
};

let student2: student = {
    name: "shovik",
    age: 25,
    course: "Java"
}; 

}
{
// 12. Type Alias With Function 
type Student = {
    name: string;
    age: number;
    course: string;
};

let displayStudent = (studen: Student): void => {
    console.log(studen.name);
    console.log(studen.age);
    console.log(studen.course);
}

// call 
displayStudent({
    name: "Gokul",
    age: 24,
    course: "pfs"

});

}
{
// 13.  Type Alias with Optional Property 
type Student ={ 
    name: string;
    age: number;
    course?: string;
};

let s1: Student = {
    name: "shivangi",
    age: 26
};
let s2: Student = {
    name: "shivangi",
    age: 26
};
console.log(s1);

}
{
// 14. Type Alias With readonly
type Student = {
    readonly id: number;
    name: string;
    age: number;
};

// example 

let studen: Student = {
    id: 101,
    name: "ravik",
    age: 25
};
console.log(studen.name);

}
{
// 15. Type Alias With Arrays 
type student = {
    name: string;
    skills: string[];
};

// example 
let student: student = {
    name: "Rahul",
    skills: [
        "Python",
        "Java"
    ]
};

}
{
// 16. Union Types 
// A union allows a value to have more than one possible type 


let id: string | number;

id = 101;
id = "ST101";

}
{
// 17. Union Type With Type Alias 

type ID = string | number;
let studentId: ID;

studentId = 101;
studentId = "ST101";

}
{
// 18. Interfaces An interface is another way to define the stucture of an object 

interface Student {
    name: string;
    age: number;
    course: string;
}

// Now 

let student: Student = {
    name: "vivek",
    age: 32,
    course:"PFS"
};

let std2 : Student = {
    name: "Miya",
    age:23,
    course:"PFS"
};
// this is invalid
// student.id = 102;  // Error: id is not defined in Student interface

}
{
// 29. Interfaces with Optional Property 
interface Student {
    name: string;
    age: number;
    greet(): string;
}
// Implementation 

let student: Student ={
     name: "ragha",
     age: 23,

     greet(): string {
        return `hello ${this.name}`;
     }
};
// calling 
console.log(student.greet());

}
{
// 23. interface Extention 
interface Person {
    name: string;
    age: number;
}

// TS Objects, Type Aliaces $ Interfaces

}
{
// 1.Object in TS 
// In js 
let student = {
    name:"arun",
    age: 21,
    course: "PFS"
};

// In TS 
let studen: {
    name: string,
    age: number,
    course: string
} = {
    name: "Arav",
    age: 22,
    course: "Data Analytics"
};

// 2. Accessing Object Properties 
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Modify Properties 
student.age = 23;
console.log(student.age);

}
{
// 3. Type Safety in Object 

// consider 
let stud: {
    name: string,
    age: number
} = {
    name: "Aravin",
    age: 22
};
stud.age = 23;
stud.age = 23;

}
{
// 4. Adding new Properties 
let studentDetails: {
    name: string,
    age: number
} ={
    name: "Aravin dev",
    age: 22
};

// studentDetails.course = "PFS";  // Error: course is not defined in this object type

// object Type doesnt contain a course properties 
}
{
//  5. Optional Properties 
// sometimes an object object properties may or may not exist 
// we use ?.

let student: {
    name: string,
    age: number,
    course?: string
} = {
    name: "Revin",
    age: 22
};

// hero course is optional 

let student2: {
    name: string;
    age: number;
    course: string;
} = {
    name: "ayana",
    age: 21,
    course: "Python"
};

}
{
// 6. ReadOnly Properties 
// suppose we dont want the student id to be changed 

let student: {
    readonly id: number;
    name: string;
} = {
    id:101,
    name: "Navin"
};
// This is Allowed:
student.name = "Arun";
console.log(student);
// // student.id = 102;  // Error: id is not defined in Student interface  error

}
{
// 7. Nested Object 
// object can contain another object 

let student: {
    name: string,
    age: number,
    address: {
        city: string;
        pincode: number;
    };
} ={
    name: "amrutha",
    age: 21,
    address: {
        city: "Malappuram",
        pincode:673645

    }
};

// access 
console.log(student.name);
console.log(student.address.city);
console.log(student.address.pincode);

}
{
// 8. Object With Array 

let student: {
    name: string;
    skills: string[];
} = {
    name: "aswin",
    skills:[
        "Python",
        "HTML",
        "Java"
    ]
};

// access 
console.log(student.skills[0]);

}
{
// 9. Object with Function 
// An object can also contain a function 

let student: {
    name: string,
    greet: () => string;

} = {
    name: "Rahul",

    greet: () => {
        return "Hello Guysssey!!";
    }
};

// calling 
console.log(student.greet());

}
{
// 10. why Do Need Type Aliases? 

// Example object structure:
// {
//     name: string;
//     age: number;
//     course: string;
// }

// suppose we need it in 10 places writing the same structure repeatedly is inconvineient 
// instead we can create a type alias 

}
{
// 11. Type Alias 

// syntax 
// Syntax: type TypeName = {
//     property: type;
// };

// example

type student = {
    name: string;
    age: number;
    course: string;
};

// now we can use it 

let name : string;
let student1: student = {
    name: "shovika",
    age: 24,
    course: "Java"
};

let student2: student = {
    name: "shovik",
    age: 25,
    course: "Java"
}; 

}
{
// 12. Type Alias With Function 
type Student = {
    name: string;
    age: number;
    course: string;
};

let displayStudent = (studen: Student): void => {
    console.log(studen.name);
    console.log(studen.age);
    console.log(studen.course);
}

// call 
displayStudent({
    name: "Gokul",
    age: 24,
    course: "pfs"

});

}
{
// 13.  Type Alias with Optional Property 
type Student ={ 
    name: string;
    age: number;
    course?: string;
};

let s1: Student = {
    name: "shivangi",
    age: 26
};
let s2: Student = {
    name: "shivangi",
    age: 26
};
console.log(s1);

}
{
// 14. Type Alias With readonly
type Student = {
    readonly id: number;
    name: string;
    age: number;
};

// example 

let studen: Student = {
    id: 101,
    name: "ravik",
    age: 25
};
console.log(studen.name);

}
{
// 15. Type Alias With Arrays 
type student = {
    name: string;
    skills: string[];
};

// example 
let student: student = {
    name: "Rahul",
    skills: [
        "Python",
        "Java"
    ]
};

}
{
// 16. Union Types 
// A union allows a value to have more than one possible type 


let id: string | number;

id = 101;
id = "ST101";

}
{
// 17. Union Type With Type Alias 

type ID = string | number;
let studentId: ID;

studentId = 101;
studentId = "ST101";

}
{
// 18. Interfaces An interface is another way to define the stucture of an object 

interface Student {
    name: string;
    age: number;
    course: string;
}

// Now 

let student: Student = {
    name: "vivek",
    age: 32,
    course:"PFS"
};

let std2 : Student = {
    name: "Miya",
    age:23,
    course:"PFS"
};

}
{
// 29. Interfaces with Optional Property 
interface Student {
    name: string;
    age: number;
}


// now 

interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    course:string;
}

// so student contains 
// name 
// age 
// course 

// Example 
let studen: Student = {
    name: "anju",
    age: 23,
    course: "PFS"
};

}
{
// 24 Multiple interface Extention 
interface Person {
    name: string;

}
interface Employee {
    employeeId: number;
}
interface Trainer extends Person, Employee {
    subject: string;

}

// now

let trainer: Trainer = {
    name: "Megha",
    employeeId: 101,
    subject: "Python"    
};

}
{
// 25 Type Vs Interface

// both can describe objects 
// Type
type StudentType = {
    name: string;
    age: number;
    course: string;
};

// TS Objects, Type Aliaces $ Interfaces

}
{
// 1.Object in TS 
// In js 
let student = {
    name:"arun",
    age: 21,
    course: "PFS"
};

// In TS 
let studen: {
    name: string,
    age: number,
    course: string
} = {
    name: "Arav",
    age: 22,
    course: "Data Analytics"
};

// 2. Accessing Object Properties 
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Modify Properties 
student.age = 23;
console.log(student.age);

}
{
// 3. Type Safety in Object 

// consider 
let stud: {
    name: string,
    age: number
} = {
    name: "Aravin",
    age: 22
};
stud.age = 23;
stud.age = 23;

}
{
// 4. Adding new Properties 
let studentDetails: {
    name: string,
    age: number
} ={
    name: "Aravin dev",
    age: 22
};

// studentDetails.course = "PFS";  // Error: course is not defined in this object type

// object Type doesnt contain a course properties 
}
{
//  5. Optional Properties 
// sometimes an object object properties may or may not exist 
// we use ?.

let student: {
    name: string,
    age: number,
    course?: string
} = {
    name: "Revin",
    age: 22
};

// hero course is optional 

let student2: {
    name: string;
    age: number;
    course: string;
} = {
    name: "ayana",
    age: 21,
    course: "Python"
};

}
{
// 6. ReadOnly Properties 
// suppose we dont want the student id to be changed 

let student: {
    readonly id: number;
    name: string;
} = {
    id:101,
    name: "Navin"
};
// This is Allowed:
student.name = "Arun";
console.log(student);
// // student.id = 102;  // Error: id is not defined in Student interface  error

}
{
// 7. Nested Object 
// object can contain another object 

let student: {
    name: string,
    age: number,
    address: {
        city: string;
        pincode: number;
    };
} ={
    name: "amrutha",
    age: 21,
    address: {
        city: "Malappuram",
        pincode:673645

    }
};

// access 
console.log(student.name);
console.log(student.address.city);
console.log(student.address.pincode);

}
{
// 8. Object With Array 

let student: {
    name: string;
    skills: string[];
} = {
    name: "aswin",
    skills:[
        "Python",
        "HTML",
        "Java"
    ]
};

// access 
console.log(student.skills[0]);

}
{
// 9. Object with Function 
// An object can also contain a function 

let student: {
    name: string,
    greet: () => string;

} = {
    name: "Rahul",

    greet: () => {
        return "Hello Guysssey!!";
    }
};

// calling 
console.log(student.greet());

}
{
// 10. why Do Need Type Aliases? 

// Example object structure:
// {
//     name: string;
//     age: number;
//     course: string;
// }

// suppose we need it in 10 places writing the same structure repeatedly is inconvineient 
// instead we can create a type alias 

}
{
// 11. Type Alias 

// syntax 
// Syntax: type TypeName = {
//     property: type;
// };

// example

type student = {
    name: string;
    age: number;
    course: string;
};

// now we can use it 

let name : string;
let student1: student = {
    name: "shovika",
    age: 24,
    course: "Java"
};

let student2: student = {
    name: "shovik",
    age: 25,
    course: "Java"
}; 

}
{
// 12. Type Alias With Function 
type Student = {
    name: string;
    age: number;
    course: string;
};

let displayStudent = (studen: Student): void => {
    console.log(studen.name);
    console.log(studen.age);
    console.log(studen.course);
}

// call 
displayStudent({
    name: "Gokul",
    age: 24,
    course: "pfs"

});

}
{
// 13.  Type Alias with Optional Property 
type Student ={ 
    name: string;
    age: number;
    course?: string;
};

let s1: Student = {
    name: "shivangi",
    age: 26
};
let s2: Student = {
    name: "shivangi",
    age: 26
};
console.log(s1);

}
{
// 14. Type Alias With readonly
type Student = {
    readonly id: number;
    name: string;
    age: number;
};

// example 

let studen: Student = {
    id: 101,
    name: "ravik",
    age: 25
};
console.log(studen.name);

}
{
// 15. Type Alias With Arrays 
type student = {
    name: string;
    skills: string[];
};

// example 
let student: student = {
    name: "Rahul",
    skills: [
        "Python",
        "Java"
    ]
};

}
{
// 16. Union Types 
// A union allows a value to have more than one possible type 


let id: string | number;

id = 101;
id = "ST101";

}
{
// 17. Union Type With Type Alias 

type ID = string | number;
let studentId: ID;

studentId = 101;
studentId = "ST101";

}
{
// 18. Interfaces An interface is another way to define the stucture of an object 

interface Student {
    name: string;
    age: number;
    course: string;
}

// Now 

let student: Student = {
    name: "vivek",
    age: 32,
    course:"PFS"
};

let std2 : Student = {
    name: "Miya",
    age:23,
    course:"PFS"
};

}
{
// 29. Interfaces with Optional Property 
interface Student {
    name: string;
    age: number;
    course?: string;
}

// }

// interface
interface Student {
    name: string;
    age: number;
}

// Both work for basic Object Structure 
// Impoetant differents 
// interface
}
