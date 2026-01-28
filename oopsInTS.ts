let usera: Object;

usera = { name: "Vishal", age: 22 };
console.log("Usera Details: ", usera);
// console.log("Usera Details: ", usera.name); // Error: we cannot call the object's property directly as usera is of type Object

let users: { name: string; age: number } = {
    name: "Vishal",
    age: 22
};

console.log("User Details: ", users.name);// Now we can access the properties as we have defined the structure of 'users' object
console.log("User Details: ", users.age);