"use strict";
/*
    -> Ek variable ko multiple types me se koi ek allow karta hai. -> “Either this OR that”.

*/
let id; // this just allows ki id can be either number or string
id = 101; // valid
id = "202"; // valid
console.log("ID as number: " + id);
console.log("ID as string: " + id);
function printId(id) {
    console.log(id);
}
let staffobj = {
    name: "SHivam",
    empId: 101
};
console.log("\nStaff Name: " + staffobj.name + ", Employee ID: " + staffobj.empId);
/*
    Literal Types:
    -> it allows us to specify the exact value a variable can have.
*/
let direction;
let statusCode;
statusCode = 200;
let user = {
    name: "Vishal",
    age: 22
};
let userr = {
    name: "Vishal"
};
let permissions = {
    admin: true,
    user: false,
    guest: 0
};
console.log("\nPermissions: ", permissions.admin);
console.log("\nPermissions: ", permissions);
let productPreview = {
    id: 1,
    name: "Laptop",
    price: 1000,
    // Description: "A high performance laptop" // Error: Object literal may only specify known
    // properties, and 'description' does not exist in type 'ProductPreview'.
};
console.log("\nProduct Preview: ", productPreview);
let productWithoutPrice = {
    id: 2,
    name: "Smartphone"
    // price: 500 // Error: Object literal may only specify known properties, and 'price' does not exist in type 'ProductWithoutPrice'.
};
console.log("\nProduct Without Price: ", productWithoutPrice);
// basically it allows us to make all properties of a type optional.
