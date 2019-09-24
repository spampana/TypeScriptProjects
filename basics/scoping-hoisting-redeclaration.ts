{
    var x=100;
}
console.log(x); //No Blocked scope with var

console.log(companyName); //Hoisting with var possible
var companyName="Synechron";
var companyName="Synechron"; // redeclaration with var possible



{
    let y=100;
}
//console.log(y); //Blocked scope with let

//console.log(companyName1); //No Hoisting with let
let companyName1="Synechron";
//var companyName1="Synechron"; // No redeclaration with let

