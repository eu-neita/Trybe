const a = 7;
const b = 16;
const c = 9;

console.log('soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));



if (a >= b) {
  console.log("'a' é maior ou igual a 'b'");

} else {
  console.log("'b' é maior que 'a'");
}

if (a > b && a > c) {

    console.log('O maior número é: ' + a + ' (a)');
  
  } else if (b > a && b > c) {
  
    console.log('O maior número é: ' + b + ' (b)');
  
  } else {
  
    console.log('O maior número é: ' + c + ' (c)');
  
  }