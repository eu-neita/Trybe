const { log } = require('console');

const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({id, name}) => `${id} ${name}`);
  strings.forEach(element => console.log(element));;
}

async function filterById(ids) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const stringsFill = simpsons.filter(({ id }) => id !== ids.toString() )
  const strings = stringsFill.map(({id, name}) => `${id} ${name}`);
  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
     if (!chosenSimpson) {
       throw new Error('id não encontrado');
     }
  return console.log(chosenSimpson);
}

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter(({ id }) => familyIds.includes(Number(id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
}

async function addPersonSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  simpsonsWithoutNelson.push({ id: '15', name: 'Maggie Simpson' });

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithoutNelson));
}

const main = async () => {
  // await readAll();
  // await filterById("7");
  // await getSimpsonById(20);
  // await filterSimpsons();
  // await createSimpsonsFamily();
  // await addPersonSimpsonsFamily();
  await replaceNelson();
}

main();
