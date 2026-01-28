/*
    -> Ek variable ko multiple types me se koi ek allow karta hai. -> “Either this OR that”.

*/
let id: number | string; // this just allows ki id can be either number or string
id = 101;          // valid
id = "202";        // valid

console.log("ID as number: " + id);
console.log("ID as string: " + id);
function printId(id: number | string) {
  console.log(id);
}


/*
    Intersection Types:
    -> it helps to combine multiple types into one.

*/

type Person = {
    name: string;
};

type Employeee = {
    empId: number;
};

type Staff = Person & Employeee;
let staffobj: Staff = {
    name: "SHivam",
    empId: 101
};
console.log("\nStaff Name: " + staffobj.name + ", Employee ID: " + staffobj.empId);
