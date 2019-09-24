"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Starting of Basic MATH Module");
const advance_math_1 = require("./advance-math");
function addition(num1, num2) {
    return num1 + num2;
}
exports.addition = addition;
function substraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
exports.multiplication = multiplication;
function division(num1, num2) {
    return num1 / num2;
}
console.log(`Square of 786 is ${advance_math_1.default(786)}`);
// Global export -->   export {addition,substraction}
console.log("Ending of Basic MATH Module");
//# sourceMappingURL=basic-math.js.map