const myFizzBuzz = require('./fizzBuzz');

describe('testa a função fizzBuzz', () => {
  it('verifica se fizBuzz retorna corretamente', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('n')).toBe(false);
  });
});