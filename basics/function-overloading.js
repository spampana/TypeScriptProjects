function addition(num1,num2){
    console.log(arguments);
    if(arguments.length === 2){
        return num1+num2;
    }else if(arguments.length ===3){
        return num1+num2- arguments[2];
    }
}

console.log(addition(100,200))
console.log(addition(100,200,200))