interface MathOne {
    addition(num1: number, num2: number): number;
    substract(num1: number, num2: number): number;
}

interface MathTwo {
    square(num: number): number;
}

interface MathThree extends MathOne, MathTwo{

}

class SyneMath implements MathOne, MathTwo {

    constructor() {

    }

    addition(num1: number, num2: number): number {
        return num1 + num2;
    }
    substract(num1: number, num2: number): number {
        return num1 - num2;
    }
    square(num: number): number {
        return num * num;
    }


}

let mathObj:SyneMath = new SyneMath();
mathObj.addition(2,4);
mathObj.substract(2,4);
mathObj.square(4);

let mathOne:MathOne = new SyneMath();
mathOne.addition(2,4);
mathOne.substract(2,4);
//mathObj.square(4); //Can't access

let mathTwo:MathTwo = new SyneMath();
//mathTwo.addition(2,4); //Can't access
//mathTwo.substract(2,4); //Can't access
mathTwo.square(4);

let mathThree:MathThree = new SyneMath();
mathThree.addition(2,4);
mathThree.substract(2,4);
mathThree.square(4);


