let xadrezPescas;
let pecasXadrezLower;
xadrezPescas = "Dama"
pecasXadrezLower = xadrezPescas.toLowerCase()

console.log(pecasXadrezLower)

switch (pecasXadrezLower) {
    case "bispo":
        console.log('O Bispo joga pelas diagonais')
        break;
    case "rei":
        console.log('O Rei Pode mover-se em qualquer direção, porém apenas uma casa por vez!')
        break;
    case "dama":
        console.log('A Dama Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.')
        break; 
    case "torre":
        console.log('A torre Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.')
        break
    case "cavalo":
            console.log('')
        break
    case "":
            console.log('')
        break
    case "":
            console.log('')
        break
    default:
        break;
}