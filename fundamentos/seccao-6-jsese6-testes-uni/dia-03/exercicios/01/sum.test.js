const sum = require('./sum.js');

 describe('testar soma!', () => {
  it('Testa se o retorno de sum(4, 5) é 9.', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('Testa se o retorno de sum(0, 0) é 0.', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Testa se a função sum lança um erro quando os parâmetros são number 4 e string 5.', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it(`Testa se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5');`, () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
  });
 });

