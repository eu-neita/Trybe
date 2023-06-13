const askName = require('./askName');
const { getPackege } = require('./getPackageNpm');

const main = async () => {
    const name = askName();

    const project = await getPackege(name);
    
    if(!project) {
        console.log(`O projeto ${name} não é um pacote NPM`);
    } else {
        console.log(`O projeto ${name} é um pacote NPM`);
    }
};

main();
