/*
    ->  Generics allow us to create reusable components that can work with a variety of data types rather 
        than a single one.
    ->  it helps to create components that can work with any data type while still maintaining type safety.
    ->  we use angle brackets <> to define generics.
*/
class Box<T> {
    constructor(public value: T) { }

    getValue(): T {
        return this.value;
    }
}

const b1 = new Box<number>(100);
const b2 = new Box<string>("TS");
console.log("Box 1 Value: ", b1.getValue());
console.log("Box 2 Value: ", b2.getValue());

// Generic constraints
function printLength<T extends { length: number }>(item: T) { // matlab T kuch bhi ho skata hai bas usme length property honi chahie
    console.log(item.length);
}

printLength("Hello");
printLength([1, 2, 3]);


//Multiple Generic types
function pair<K, V>(key: K, value: V) {
    return { key, value };
}
const paired = pair<string, number>("age", 25);
const pairednn = pair<number, number>(200, 25);
console.log("Paired Object: ", paired);
console.log("Paired Object with number key: ", pairednn);
