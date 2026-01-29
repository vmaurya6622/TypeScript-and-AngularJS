/*
    class is a blueprint for creating objects with specific properties and methods.
    there are three access modifiers in TS :
        1. public -> accessible from anywhere
        2. private -> accessible only within the class
        3. protected -> accessible within the class and its subclasses
*/
class Student {
    id: number;
    name: string;
    private marks: number;
    constructor(id: number, name: string, marks: number) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    getGrade(): string {
        if (this.marks >= 90) return "A";
        return "B";
    }
}
const student1 = new Student(1, "Vishal", 85);
console.log("Student Name: ", student1.name);
console.log("Student Grade: ", student1.getGrade());

class ravi extends Student {
    padhle() {
        console.log("Ha bhai padh rha hu.")
    }
}
const ravistudent = new ravi(1, "Raviii", 88);
console.log("Ravi Info: " + ravistudent.getGrade());
console.log("Ravi Info: " + ravistudent.padhle());

// interface only tells ki kya hona chahie but it does not provide implementation info
interface Car {
    make: string;
    model: string;
    year: number;
    getCarInfo(): string;
    // getCarInfo(): string { // this thing is not allowed in interface
    //     return `${this.year} ${this.make} ${this.model}`;
    // };
}
class buggoi implements Car {
    constructor(public make: string, public model: string, public year: number) { }
    getCarInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
const myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo(): string { // we have to provide implementation here
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log("Car Info: ", myCar.getCarInfo());
const myBuggoi = new buggoi("Honda", "Civic", 2021);
console.log("Buggoi Info: ", myBuggoi.getCarInfo());
