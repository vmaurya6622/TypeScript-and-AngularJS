var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class is a blueprint for creating objects with specific properties and methods.
    there are three access modifiers in TS :
        1. public -> accessible from anywhere
        2. private -> accessible only within the class
        3. protected -> accessible within the class and its subclasses
*/
var Student = /** @class */ (function () {
    function Student(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.getGrade = function () {
        if (this.marks >= 90)
            return "A";
        return "B";
    };
    return Student;
}());
var student1 = new Student(1, "Vishal", 85);
console.log("Student Name: ", student1.name);
console.log("Student Grade: ", student1.getGrade());
var ravi = /** @class */ (function (_super) {
    __extends(ravi, _super);
    function ravi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ravi.prototype.padhle = function () {
        console.log("Ha bhai padh rha hu.");
    };
    return ravi;
}(Student));
var ravistudent = new ravi(1, "Raviii", 88);
console.log("Ravi Info: " + ravistudent.getGrade());
console.log("Ravi Info: " + ravistudent.padhle());
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    }
};
console.log("Car Info: ", myCar.getCarInfo());
