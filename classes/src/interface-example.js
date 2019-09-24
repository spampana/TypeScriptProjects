class SyneMath {
    constructor() {
    }
    addition(num1, num2) {
        return num1 + num2;
    }
    substract(num1, num2) {
        return num1 - num2;
    }
    square(num) {
        return num * num;
    }
}
let mathObj = new SyneMath();
mathObj.addition(2, 4);
mathObj.substract(2, 4);
mathObj.square(4);
let mathOne = new SyneMath();
mathOne.addition(2, 4);
mathOne.substract(2, 4);
//mathObj.square(4); //Can't access
let mathTwo = new SyneMath();
//mathTwo.addition(2,4); //Can't access
//mathTwo.substract(2,4); //Can't access
mathTwo.square(4);
let mathThree = new SyneMath();
mathThree.addition(2, 4);
mathThree.substract(2, 4);
mathThree.square(4);
//# sourceMappingURL=interface-example.js.map