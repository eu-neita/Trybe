const readLine = require('readline-sync');

const askName = () => readLine.question('Digite o nome: ')
module.exports = askName;