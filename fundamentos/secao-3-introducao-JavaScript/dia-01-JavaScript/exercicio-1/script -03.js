let nota;
nota = -1;

if (nota >= 90 && nota < 100) {
    console.log('Parabens nota A')
} 
else if (nota >= 80 && nota < 90) {
    console.log('Parabens nota B')
}
else if (nota >= 70 && nota < 80) {
    console.log('Parabens nota C')
}
else if (nota >= 60 && nota < 70) {
    console.log('Parabens nota D')
}
else if (nota >= 50 && nota < 60) {
    console.log('Parabens nota E')
}
else if (nota < 50 && nota > 0) {
    console.log('Parabens nota F')
}
else{
    console.log('não é uma nota válida')
}