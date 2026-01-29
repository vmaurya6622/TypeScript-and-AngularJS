/*
    object represents any non primitive value i.e. anything that is not number, string, boolean, null, or undefined.
*/
var usera;
usera = { name: "Vishal", age: 22 };
console.log("Usera Details: ", usera);
// console.log("Usera Details: ", usera.name); // Error: we cannot call the object's property directly as usera is of type Object
var users = {
    name: "Vishal",
    age: 22
};
console.log("User Details: ", users.name); // Now we can access the properties as we have defined the structure of 'users' object
console.log("User Details: ", users.age);
// Arrays
var numbers = [1, 5, 14, 25, 11];
console.log("\n");
for (var i = 0; i < numbers.length; i++) {
    console.log("Number at index " + i + " is: " + numbers[i]);
}
console.log("\n");
var arrayofstrings = ["Vishal", "John", "Doe"];
for (var i = 0; i < arrayofstrings.length; i++) {
    console.log("String at index " + i + " is: " + arrayofstrings[i]);
}
// to add/remove an element at the end we use push/pop methods respectively
// to add/remove element at the beginning we use unshift/shift methods respectively
// for(let val of arrayofstrings){ // for-of loop
//     console.log("Value from arrayofstrings: "+val);
// }
console.log("\n");
arrayofstrings.forEach(function (val, indexx) {
    console.log("Value from arrayofstrings using forEach: " + val + " at index: " + indexx);
});
// we can also make a mixed array of different data types using union type
var mixedarray = [1, "Vishal", true, 25, "John", false];
console.log("\nMixed Array: ", mixedarray);
/* we use map to transform elements of array like to change the elements.*/
var newarray = [1, 54, 8, 12, 7, 3, 9];
var squarednums = newarray.map(function (val) { return val * val; }); // map returns a new array after performing the operation on each element
console.log("\nSquared Numbers: ", squarednums);
// we use filter to select elements based on some condition
var even = newarray.filter(function (val) { return val % 2 == 0; }); // filter returns a new array with elements that satisfy the condition
console.log("\nEven Numbers: ", even);
// we use reduce to accumulate values to a single value
var sum = newarray.reduce(function (accumulator, currentval) { return accumulator + currentval; }, 0); // initial value of accumulator is 0
console.log("\nSum of Numbers: ", sum);
// to search for an element in array we use find
// let findnum= newarray.find((val)=> val>10); //-> returns the first element that satisfies the condition
// find can return undefined if no element satisfies the condition
// to check if an element exists in array we use some/every
var hasLargeNum = newarray.some(function (val) { return val > 50; }); // returns true if any element satisfies the condition
// to sort an array we use sort
var sortednums = newarray.sort(function (a, b) { return a - b; }); // ascending order
// to sort in descending order
var descsortednums = newarray.sort(function (a, b) { return b - a; }); // descending order
//to search index of an element we use indexOf
var index = newarray.indexOf(7); // returns -1 if not found
// to check if element exists in array we use includes
// let includesnum= newarray.includes(3); // returns true/false
console.log("\n");
for (var i = 0; i < newarray.length; i++) {
    console.log("Number at index " + i + " is: " + newarray[i]);
}
// when we want a part of an array we use slice
var partarray = newarray.slice(1, 4); // returns elements from index 1 to 3 (4-1)
console.log("\nPart of Array: ", partarray);
