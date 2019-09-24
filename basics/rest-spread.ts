
//REST Parameter - its pack the comma seperated values into an Array
function synechronAsiaOffices(...countryNames:string[]):void{
console.log(countryNames);
}

//Rest Parameters should be the last in the parameter list
/*function synechronAsiaOffices1(...countryNames:string[],names:string):void{
    console.log(countryNames);
}*/

//SPREAD Operator - will unpack the array/object values
let names:string[] =["A","B","C"];
synechronAsiaOffices(...names); //spread

synechronAsiaOffices("A","B","C");
synechronAsiaOffices("A","B","C","D","E","F");
synechronAsiaOffices("A","B");




const PizzaOrder ={
    orderId:3333,
    customerId:3332,
    orderDayte:new Date(),
    status:"Order received sucessfully"
}

const PizzaInOven ={
    ...PizzaOrder,
    status:"Pizza is getting Baked"
}

const PizzaOnTheWay={
    ...PizzaInOven,
    status:"Pizza is on the Way"
}

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOnTheWay);