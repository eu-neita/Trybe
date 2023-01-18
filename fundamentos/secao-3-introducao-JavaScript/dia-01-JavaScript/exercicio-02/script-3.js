const custProduct = -0;
const marketValue = 0;
let totalCust;
let lucroMil;
if (custProduct >= 0 && marketValue >= 0) {
totalCust = custProduct * 1.2
lucroMil = (marketValue - totalCust) * 1000
console.log(lucroMil)
}
else{
    console.log("Erro, valores não podem ser 0 ou negativos")
}
