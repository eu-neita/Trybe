const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (lesson2, key, value) => lesson2[key] = value;
addTurno(lesson2, 'turno', 'noite');
const listKey = (obj) => Object.keys(obj);
listKey(lesson2)
const keyLength = (obj) => Object.keys(obj).length;
console.log(keyLength(lesson2));
const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson2));

const objAssing = (obj, obj2, obj3) => Object.assign(obj, obj2, obj3);
console.log(objAssing(lesson1, lesson2, lesson3));