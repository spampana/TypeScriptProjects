console.log("Starting of Basic MATH Module");

import syneSquare from "./advance-math";

export function addition(num1: number, num2: number): number {
    return num1 + num2;
}

function substraction(num1: number, num2: number): number {
    return num1 - num2;
}


export function multiplication(num1: number, num2: number): number {
    return num1 * num2;
}


function division(num1: number, num2: number): number {
    return num1 / num2;
}

console.log(`Square of 786 is ${syneSquare(786)}`);

// Global export -->   export {addition,substraction}
console.log("Ending of Basic MATH Module");