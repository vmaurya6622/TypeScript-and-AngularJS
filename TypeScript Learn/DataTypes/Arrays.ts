/*
    object represents any non primitive value i.e. anything that is not number, string, boolean, null, or undefined.
    -> Mutating properties vo hai jo data ko change karte hain.
    -> Non-mutating properties vo hain jo data ko change NAHI karte hain balki naya data return karte hain.
        
    MUTATING methods
        push()	add end
        pop()	remove end
        shift()	remove start
        unshift()	add start
        splice()	add/remove
        sort()	reorder
        reverse()	reverse

    Common NON-MUTATING methods -> array will not change, new array created
        Method	Returns
        map()	new array
        filter()	new array
        slice()	new array
        concat()	new array
        toSpliced()	new array
        toSorted()	new array
        toReversed()	new array
    */

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


// Arrays

let numbers:number[] = [1,5,14,25,11];
console.log("\n");
for(let i=0;i<numbers.length;i++){
    console.log("Number at index "+i+" is: "+numbers[i]);
}

console.log("\n");
let arrayofstrings:string[]= ["Vishal", "John", "Doe"];
for(let i=0;i<arrayofstrings.length;i++){
    console.log("String at index "+i+" is: "+arrayofstrings[i]);
}

// to add/remove an element at the end we use push/pop methods respectively
// to add/remove element at the beginning we use unshift/shift methods respectively

// for(let val of arrayofstrings){ // for-of loop
//     console.log("Value from arrayofstrings: "+val);
// }

console.log("\n");
arrayofstrings.forEach((val,indexx)=>{ // for each cannot break like normal for loop also it cannot return a value
    console.log("Value from arrayofstrings using forEach: "+val+" at index: "+indexx);
});


// we can also make a mixed array of different data types using union type
let mixedarray: (string | number | boolean)[] = [1, "Vishal", true, 25, "John", false];
console.log("\nMixed Array: ", mixedarray);

/* we use map to transform elements of array like to change the elements.*/
let newarray:number[]=[1,54,8,12,7,3,9];


let squarednums= newarray.map((val)=>val*val); // map returns a new array after performing the operation on each element
console.log("\nSquared Numbers: ", squarednums);


// we use filter to select elements based on some condition
let even = newarray.filter((val)=> val%2==0); // filter returns a new array with elements that satisfy the condition
console.log("\nEven Numbers: ", even);

// we use reduce to accumulate values to a single value
let sum= newarray.reduce((accumulator, currentval)=> accumulator+currentval, 0); // initial value of accumulator is 0
console.log("\nSum of Numbers: ", sum);

// to search for an element in array we use find
// let findnum= newarray.find((val)=> val>10); //-> returns the first element that satisfies the condition
// find can return undefined if no element satisfies the condition

// to check if an element exists in array we use some/every
let hasLargeNum= newarray.some((val)=> val>50); // returns true if any element satisfies the condition
// to sort an array we use sort
let sortednums= newarray.sort((a,b)=> a-b); // ascending order
// to sort in descending order
let descsortednums= newarray.sort((a,b)=> b-a); // descending order
//to search index of an element we use indexOf
let index= newarray.indexOf(7); // returns -1 if not found

let reversednums= newarray.reverse(); // reverses the array
// to check if element exists in array we use includes
// let includesnum= newarray.includes(3); // returns true/false


console.log("\n");
for(let i=0;i<newarray.length;i++){
    console.log("Number at index "+i+" is: "+newarray[i]);
}

// when we want a part of an array we use slice
let partarray= newarray.slice(1,4); // returns elements from index 1 to 3 (4-1)
console.log("\nPart of Array: ", partarray);

//Adding elements using splice

//we can also use splice to add/remove elements from an array
let splicedarray= newarray.splice(2,3); // removes 3 elements from index 2

let addingOnlyOneElement = newarray.splice(2, 0, 3); // this is used to add only one element at index 2
// to insert at beginning use index 0,0,11 // this wii add 11 at the beginning like unshift()
// to insert at end use array.length,0,11 // this will add 11 at the end like push()
console.log("\nArray after splicing(removing 3 elements from index 2): ", newarray);
let splicedarrayadd= newarray.splice(2,0,20,25); // adds 20,25 at index 2

//Removing elements using splice
let removedarray= newarray.splice(3,2); // removes 2 elements from index 3
let removedarraystart= newarray.splice(0,2); // removes 2 elements from start
let removedarrayend= newarray.splice(-2,2); // removes 2 elements from end

let items = ["A", "B", "C", "D"];
let indexi = items.indexOf("C");
if (indexi !== -1) {
    items.splice(indexi, 1);
}
console.log("\n"+items);
// ["A", "B", "D"]

/*
    ->  Do NOT use delete keyword to remove element of array because element remove nhi hota and undefined 
        ho jata hai jis se array ka size same rehta hai but element undefined ho jata hai.
*/

