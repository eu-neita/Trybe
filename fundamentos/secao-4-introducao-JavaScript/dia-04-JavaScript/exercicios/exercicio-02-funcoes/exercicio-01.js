function verificaPalindrome(phases,){
    let phaseRev = phases.split('').reverse().join('')
if (phases === phaseRev) {
    return true;
}else{
    return false
}
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
let maior = 0;

function maiorNumero(array) {
    for (let index = 0; index < array.length; index+=1) {
        if(maior < array[index]){
        maior = index;
    }
    }
    return maior;
}

console.log(maiorNumero([2, 3, 6, 7, 10, 1]));

let menor = 0;

function menorNumero(array) {
    for (let index = 0; index < array.length; index+=1) {
        if(menor > array[index]){
        menor = index;
    }
    }
    return menor;
}

console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));