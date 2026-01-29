// this is named export
export function add(a:number,b:number){
    return a+b;
}
export const pi=3.14;

export class Circle{
    radius: number;
    constructor(radius:number){
        this.radius= radius;
    }
    getArea(): number{
        return pi*this.radius*this.radius;
    }
}

// this is default export
export default function subtract(a:number,b:number){
    return a-b;
}