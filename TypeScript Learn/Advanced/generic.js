/*
    ->  Generics allow us to create reusable components that can work with a variety of data types rather
        than a single one.
    ->  it helps to create components that can work with any data type while still maintaining type safety.
    ->  we use angle brackets <> to define generics.
*/
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var b1 = new Box(100);
var b2 = new Box("TS");
console.log("Box 1 Value: ", b1.getValue());
console.log("Box 2 Value: ", b2.getValue());
// Generic constraints
function printLength(item) {
    console.log(item.length);
}
printLength("Hello");
printLength([1, 2, 3]);
//Multiple Generic types
function pair(key, value) {
    return { key: key, value: value };
}
var paired = pair("age", 25);
var pairednn = pair(200, 25);
console.log("Paired Object: ", paired);
console.log("Paired Object with number key: ", pairednn);
