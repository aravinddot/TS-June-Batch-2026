"use strict";
// primitive data types
let str = "typescript";
let num = 10;
let bool = true;
let nullValue = null;
let undefinedValue = undefined;
// disable type checking
// don't use
let anyDataType = "playwright";
anyDataType = 10;
anyDataType = true;
let value = 23;
value = "typescript";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// array
const arr = [1, 2, 3, "string", true, ["playwright", "cypress"]];
console.log(arr);
const obj = {
    name: "playwright",
    age: 6,
    isActive: true
};
console.log(obj);
function print() {
    return ["automation"];
}
const func = print();
console.log(func);
function printUserValues(name, age) {
    console.log(name, age);
}
printUserValues('Admin', 12345);
//# sourceMappingURL=dataTypes.js.map