"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.pi = void 0;
exports.add = add;
exports.default = subtract;
// this is named export
function add(a, b) {
    return a + b;
}
exports.pi = 3.14;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return exports.pi * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
// this is default export
function subtract(a, b) {
    return a - b;
}
