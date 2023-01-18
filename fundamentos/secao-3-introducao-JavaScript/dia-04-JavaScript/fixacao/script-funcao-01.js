const num1 = 3;
const num2 = 3;
const num3 = 3;
const numP = -1;

function sum(numA, numB) {
    return numA + numB;
    
}
function sub(numA, numB) {
    return numA - numB;
    
}
function mult(numA, numB) {
    return numA * numB;
    
}
function div(numA, numB) {
    return numA / numB;
    
}
function module(numA, numB) {
    return numA % numB;
    
}
function compareNum() {
    if(num1 > num2){
    return console.log(num1, "é maior que o segundo numero")
    }else if(num1 < num2){
    return console.log(num2, "é maior que o primeiro numero")
    }
    
}
function compareNum3() {
    if(num1 > num2 && num1 > num3){
        return console.log(num1, "é maior que o segundo e o terceiro numero")
    }else if(num1 < num2 && num2 > num3){
        return console.log(num2, "é maior que o primeiro e o terceiro numero")
    }else if(num1 < num3 && num3 > num2){
        return console.log(num3, "é maior que o primeiro e o segundo numero")
        }
    
}
function printPositive(){
    if (numP > 0) {
        console.log('positive')
    } else {
        console.log('negative')        
    }

}
function triangule(){
    if (num1 == num2 && num2 == num3 && num3 == num1) {
        return true
    } else {
        return false     
    }

}


console.log('resultado da soma numero 1 e numero 2:' , sum(1,2));
console.log('resultado da subtração numero 1 e numero 2:' ,sub(4,1));
console.log('resultado da multiplicação numero 1 e numero 2:' ,mult(2,3));
console.log('resultado da divisão numero 1 e numero 2:' ,div(9,3));
console.log('resultado da sobra numero 1 e numero 2:' ,module(9,2));
console.log('resultado da comparação numero 1 e numero 2:' ,compareNum());
console.log('resultado da sobra numero 1 e numero 2 e numero 3:' ,compareNum3());
console.log('se o numero atribuido é positivo:' ,printPositive());
console.log("triangulo é:", triangule()); 

