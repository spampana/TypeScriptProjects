//REST Parameter - its pack the comma seperated values into an Array
function synechronAsiaOffices(...countryNames) {
    console.log(countryNames);
}
//Rest Parameters should be the last in the parameter list
/*function synechronAsiaOffices1(...countryNames:string[],names:string):void{
    console.log(countryNames);
}*/
//SPREAD Operator - will unpack the array/object values
let names = ["A", "B", "C"];
synechronAsiaOffices(...names); //spread
synechronAsiaOffices("A", "B", "C");
synechronAsiaOffices("A", "B", "C", "D", "E", "F");
synechronAsiaOffices("A", "B");
const PizzaOrder = {
    orderId: 3333,
    customerId: 3332,
    orderDayte: new Date(),
    status: "Order received sucessfully"
};
const PizzaInOven = Object.assign(Object.assign({}, PizzaOrder), { status: "Pizza is getting Baked" });
const PizzaOnTheWay = Object.assign(Object.assign({}, PizzaInOven), { status: "Pizza is on the Way" });
console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOnTheWay);
//# sourceMappingURL=rest-spread.js.map