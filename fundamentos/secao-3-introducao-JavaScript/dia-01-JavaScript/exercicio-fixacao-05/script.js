let statusPessoa;
statusPessoa = "reprovado"

switch (statusPessoa) {
    case "aprovado":
        console.log('parabens vc foi aprovado')
        break;
        case "lista":
            console.log('foi para lista de espera')
            break;
        case "reprovado":
            console.log('foi reprovado')
            break;
    default:
        console.log('informação incorreta')
        break;
}