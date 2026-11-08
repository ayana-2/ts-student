// // 1 
// // a.
// let courseName: string = "PFS";
// let duration: number = 3;
// // b 
// let numbers: number[] = [10,20,30,40];
// // c 
// function getTotal(arr: number[]): number {
//     let total = 0;
//     for (let num of arr){
//         total = num;
//     }
//     return total;
// }
// console.log(getTotal(numbers));

// // d 
// function printMessage():void {
//     console.log("Welcome to TypeScript");
// }
// printMessage();


// // 2
// interface Student{
//     id: number;
//     name: string;
//     course: string;
// }

// type Address = {
//     city: string;
//     pincode: number;
// };

// const  studentDetails: Student & Address = {
//     id: 100,
//     name: "Ayana",
//     course: "PFS",
//     city: "Malappuram",
//     pincode: 673645
// };
// console.log(studentDetails);

// 4

// type OrderSatus = "pending" | "Shipped" | "Delivered";

// function showStatus(status: OrderSatus): void {
//     console.log(status);
// }
// showStatus("pending");


// 5
// function calculatePrice(
//     price: number,
//     quantity: number,
// ): number {
//    return price * quantity; 
// }
// let prices: number[] = [100,200,300,400] 

// console.log(calculatePrice(prices[0], 2));

// 6









// 7

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

// a) Partial

const product1: Partial<Product> = {
    name: "Laptop",
    price: 50000
};

// b) Pick

const product2: Pick<Product, "id" | "name"> = {
    id: 1,
    name: "Mobile"
};

// c) Omit

const product3: Omit<Product, "description"> = {
    id: 2,
    name: "Keyboard",
    price: 1500
};

console.log(product1);
console.log(product2);
console.log(product3);


// 8









// 9