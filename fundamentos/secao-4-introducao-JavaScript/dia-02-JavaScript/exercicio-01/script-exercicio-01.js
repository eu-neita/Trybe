let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNubers = 0;
let ariNubers = 0;
let major = numbers[0];
let imNumber = [];
let minor = numbers[0];
let arrCreate = [];
let divCreate = [];
for (let index = 0; index < numbers.length; index+=1) {
    sumNubers += numbers[index] 

   }


if (major === 0) {
    console.log('Nenhum valor impar');
} else {
    console.log(major,'é o maior numero');
}



for (let indexIn = 0; indexIn < numbers.length; indexIn+=1) {
    if (numbers[indexIn]%2 == 0) {
    
    }else{
        imNumber.push(numbers[indexIn])
    }
 
 }
 console.log(imNumber ,'são impares');


for (let indexMinor = 0; indexMinor < numbers.length; indexMinor+=1) {
    if (numbers[indexMinor] < minor) {
     minor = numbers[indexMinor]
    }
}
    console.log(minor,'é o menor numero');

    for (let indexArr = 1; indexArr < 25+1; indexArr+=1) {
        arrCreate.push(indexArr);
    }
console.log(arrCreate,'criação de um array em sequencia');

    for (let indexDiv = 0; indexDiv < arrCreate.length; indexDiv++) {

        divCreate.push(arrCreate[indexDiv]/2)
    }

    console.log(divCreate,'divisão dos arrays criados por 2');