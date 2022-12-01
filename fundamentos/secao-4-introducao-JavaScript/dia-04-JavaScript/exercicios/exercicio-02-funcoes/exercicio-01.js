function verificaPalindrome(phases,){
    let phaseRev = phases.split('').reverse().join('')
if (phases === phaseRev) {
    return console.log('palindromo é ' + true);
}else{
    return console.log('palindromo é ' + false);
}
}
verificaPalindrome('arara');
verificaPalindrome('desenvolvimento');
let maior = 0;

function maiorNumero(array) {
    for (let index = 0; index < array.length; index+=1) {
        if(maior < array[index]){
        maior = index;
    }
    }
    return maior;
}

console.log('maior numero é: ' +maiorNumero([2, 3, 6, 7, 10, 1]));

let menor = 0;

function menorNumero(array) {
    for (let index = 0; index < array.length; index+=1) {
        if(menor > array[index]){
        menor = index;
    }
    }
    return menor;
}
let maiorNome = '';
console.log('menor numero é: ' +menorNumero([2, 4, 6, 7, 10, 0, -3]));

function namesArray(array) {
    for (let index = 0; index < array.length; index+=1) {
        if(maiorNome.length < array[index].length)
        maiorNome = array[index];

    }
    return console.log('o maior nome é: '+maiorNome);
}

namesArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
let armazaenaNumero = 0;
function inteiro(array) {
    for (let index = 0; index < array.length; index+=1) {
        for (let index2 = 0; index2 < array.length+1; index2+=1) {
            if (array[index] === array[index2]) {
            armazaenaNumero = array[index];
            }   
            
        }
        return console.log('numero inteiro que mais se repete é: '+armazaenaNumero);
        
    }
}
inteiro([2, 3, 2, 5, 8, 2, 3]);
let somaNumeros = 0;
function somatorio(number) {
    for (let index = 0 ; index < number+1; index+=1) {
        somaNumeros += index;
    }
    return console.log('resultado das somatórias: '+ somaNumeros);
}

somatorio(5);

function verifica(word, ending) {
    let multila = word.split('');
    let multilaEnd = ending.split('')
    //  return console.log(multilaEnd)
    let contForTrue = false;
    for (let index = 0; index < multila.length-1; index+=1) {
        
        if(multila[index] == multilaEnd[0] && multila[index+1] == multilaEnd[1]){
            contForTrue = true;
        }else{
            contForTrue = false;
        }
    }
    return console.log(contForTrue);
}
verifica('trybe','by')