console.log("Starting of Main Module");

import {addition,multiplication}  from "./basic-math";
//or 
import * as mathObj  from "./basic-math"; // if we have many exports

console.log(`Addition - ${mathObj.addition(100,200)}`);
console.log(`Substraction - ${mathObj.multiplication(100,200)}`);

console.log("Ending of Main Module");


/*

Starting of Main Module
Starting of Basic MATH Module
Starting of Advance MATH Module
Ending of Advance MATH Module
Square of 786 is 617796
Ending of Basic MATH Module
Addition - 300
Substraction - 20000
Ending of Main Module

*/