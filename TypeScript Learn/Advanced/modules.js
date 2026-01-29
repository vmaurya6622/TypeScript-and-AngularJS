"use strict";
/*
    Module consists of exports and imports: it breaks code into logical pieces
    to make it more maintainable and reusable.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var moduleToImport_js_1 = require("./moduleToImport.js"); // named import
var moduleToImport_js_2 = require("./moduleToImport.js"); // default import
// we can also rename imports using 'as' keyword
var moduleToImport_js_3 = require("./moduleToImport.js");
console.log("Addition using named import: ", (0, moduleToImport_js_1.add)(10, 20));
console.log("Subtraction using default import: ", (0, moduleToImport_js_2.default)(30, 15));
console.log("Value of pi using named import: ", moduleToImport_js_1.pi);
console.log("Addition using renamed import: ", (0, moduleToImport_js_3.add)(5, 7));
console.log("Value of pi using renamed import: ", moduleToImport_js_3.pi);
// to import everything from a module
var mathu = require("./moduleToImport.js");
console.log("Addition using import * as : ", mathu.add(12, 8));
