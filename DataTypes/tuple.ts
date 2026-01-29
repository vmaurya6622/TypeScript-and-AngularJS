/*
    tuples can be created to store a fixed number of elements where each element can be of a different type.
*/
let Employee:[number, string, boolean] = [1, "Vishal", true];

console.log("Employee Tuple: ", Employee);
console.log("Employee ID: ", Employee[0]);
console.log("Employee Name: ", Employee[1]);
console.log("Employee Active Status: ", Employee[2]);

console.log("\nIterating through Employee Tuple:");
Employee.forEach(element => 
    console.log("Element in Employee Tuple: ", element)
);