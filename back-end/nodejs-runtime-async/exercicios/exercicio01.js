const readLine = require('readline-sync')

const imc = () => {
  const weight = readLine.question('What’s your weight?');
  const heigth = readLine.questionFloat('What’s your height?');
  const calc = weight/(heigth*heigth);
  if (calc < 18.5) return console.log('abaixo do peso')
  if (calc > 18.5 && calc <= 24.9) return console.log(calc + ' peso normal')
  if (calc >= 25 && calc <= 29.9) return console.log(calc + ' sobre-peso')
  if (calc >= 30 && calc <= 34.9) return console.log(calc + ' obesidade grau 1')
  if (calc >= 35 && calc <= 39.9) return console.log(calc + ' obesidade grau 2')
  return console.log("obesidade graus 3 e 4");
}
imc();