"use strict";
/*
    the varibales in typescript are:
    \   - var - function scoped
    \   - let - value can change
    \   - const - value cannot change
    \   - types - number, string, boolean, array, tuple, enum, any, void, null, undefined, never, object

    +  -  *  /   // arithmetic
    ==  ===      // comparison 5 == "5"    // true (only value)   5 === "5"   // false (value + type)
    &&  ||  !    // logical

    ->  TypeScript is a superset of JavaScript that adds extra features like static typing, interfaces, enums,
        and more. Essentially, TypeScript is JavaScript with additional syntax for defining types, making it a
        powerful tool for building scalable and maintainable applications.
    ->  it allows us to define variable types and helps catch errors before running the code;
    ->  widely used for web development or client and server side applications;
*/
let nameis = "Vishal"; // string
let age = 22; // number
let isActive = true; // boolean
let x; // undefined
let y = null; // null
console.log("age == 22?: " + (age == Number("23")));
console.log("age === 22?: " + (age === 22));
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Value of i: " + i);
}
//while loop
let j = 0;
while (j < 5) {
    console.log("Value of j: " + j);
    j++;
}
// Functions:
function add(a, b) {
    return a + b;
}
//arrow function: 
const multiply = (a, b) => {
    return a * b;
};
console.log("Addition by function: " + add(5, 10));
console.log("Multiplication by arrow function: " + multiply(5, 10));
// Arrays:
let nums = [1, 2, 3, 4, 5]; // array of numbers
console.log("Numbers array: " + nums);
nums.push(6);
console.log("Numbers array: " + nums);
class Employee {
    constructor() {
        this.salary = 500;
    }
    printSalary() {
        console.log(`Salary is: ${this.salary}`);
    }
}
const emp = new Employee();
emp.printSalary();
let globalvar = 100; // global variable
class Sample {
    constructor() {
        this.varibale = 200; // private variable
    }
    assignValue() {
        let localvar = 300; // local variable
        console.log("Local Variable: " + localvar);
    }
}
console.log("Global Variable: " + globalvar);
let obj = new Sample();
obj.assignValue();
// Enumerators
/*
let status: string;

status = "ACTIVE";
status = "active";
status = "Actve"; //  typo and may lead to a bug

therefore we use enums which helps to create custom status which is consistent throughout the code

enum Status {
    ACTIVE,
    INACTIVE,
    PENDING
}

let userStatus: Status;

userStatus = Status.ACTIVE;
userStatus = Status.PENDING;


*/
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
let role = Role.ADMIN;
console.log("Role is: " + role);
