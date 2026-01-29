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
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    }
};
console.log("Car Info: ", myCar.getCarInfo());
