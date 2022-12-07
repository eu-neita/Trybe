const longestWord = (phase) => {
let jeffDammer = phase.split(' ');
let saveWord = '';
console.log(saveWord)
for (let index = 0; index < jeffDammer.length; index+=1) {
    if (jeffDammer[index].length > saveWord.length) {
        saveWord = jeffDammer[index];
    }
    
}
return console.log(saveWord)
} 
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'