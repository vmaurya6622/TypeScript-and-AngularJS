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


let nameis = "Vishal";   // string
let age = 22;         // number
let isActive = true;  // boolean
let x;                // undefined
let y = null;         // null



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
function add(a: number, b: number): number { //return type number
    return a + b;
}

//arrow function: 
const multiply = (a: number, b: number): number => {
    return a * b;
}

console.log("Addition by function: " + add(5, 10));
console.log("Multiplication by arrow function: " + multiply(5, 10));

// Arrays:
let nums = [1, 2, 3, 4, 5]; // array of numbers
console.log("Numbers array: " + nums);
nums.push(6);
console.log("Numbers array: " + nums);


class Employee {
    salary: number = 500;
    printSalary(): void {
        console.log(`Salary is: ${this.salary}`);
    }
}

const emp = new Employee();
emp.printSalary();

let globalvar : number = 100; // global variable
class Sample {
    private varibale: number = 200; // private variable
    assignValue(): void {
        let localvar:number = 300; // local variable
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
enum Role{
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST" 
}
let role: Role= Role.ADMIN;    
console.log("Role is: " + role);

