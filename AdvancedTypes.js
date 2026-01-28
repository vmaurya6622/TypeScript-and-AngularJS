/*
    -> Ek variable ko multiple types me se koi ek allow karta hai. -> “Either this OR that”.

*/
var id; // this just allows ki id can be either number or string
id = 101; // valid
id = "202"; // valid
console.log("ID as number: " + id);
console.log("ID as string: " + id);
function printId(id) {
    console.log(id);
}
var staff = {
    name: "SHivam",
    empId: 101
};
console.log("\nStaff Name: " + staff.name + ", Employee ID: " + staff.empId);
