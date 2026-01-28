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

/*
    Literal Types:
    -> it allows us to specify the exact value a variable can have.
*/
let direction: "left" | "right" | "up" | "down";

let statusCode: 200 | 404 | 500;

statusCode = 200;
// statusCode = 401; // Error: Type '401' is not assignable to type '200 | 404 | 500'. 

/*
    Mapped Types:
    -> it allows us to create new types based on existing ones by transforming each property in some way.
    Builtin Types are:
        - Partial<Type> //all optional
        - Readonly<Type> //all readonly
        - Record<Keys, Type> //key value pair
        - Pick<Type, Keys> //select some properties
        - Omit<Type, Keys> //exclude some properties
*/

type User = {
    name: string;
    age: number;
};

type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

let user: ReadonlyUser = {
    name: "Vishal",
    age: 22
};
// user.age = 23; // Error: Cannot assign to 'age' because it is a read-only property.



//this is for optional
type Userr = {
    name: string;
    age: number;
};

let userr: Partial<Userr> = { // here it is not not mandatory to provide all properties
    name: "Vishal"
};

// this is for Record - fixed key value pairs
type Roles = "admin" | "user" | "guest";

type RolePermissions = Record<Roles, boolean | number>;

let permissions: RolePermissions = {
    admin: true,
    user: false,
    guest: 0
};
console.log("\nPermissions: ", permissions);

/*
    this is for pick - select some properties
*/
type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
};
type ProductPreview = Pick<Product, "id" | "name" | "price">;

let productPreview: ProductPreview = {  
    id: 1,
    name: "Laptop",
    price: 1000,
    // description: "A high performance laptop" // Error: Object literal may only specify known properties, and 'description' does not exist in type 'ProductPreview'.
};
console.log("\nProduct Preview: ", productPreview);

/*
    this is for omit - exclude some properties
*/
type FullProduct = {
    id: number;
    name: string;
    price: number;
}
type ProductWithoutPrice = Omit<FullProduct, "price">; // here we are omitting price property

let productWithoutPrice: ProductWithoutPrice = {    
    id: 2,
    name: "Smartphone"
    // price: 500 // Error: Object literal may only specify known properties, and 'price' does not exist in type 'ProductWithoutPrice'.
};
console.log("\nProduct Without Price: ", productWithoutPrice);
// basically it allows us to make all properties of a type optional.