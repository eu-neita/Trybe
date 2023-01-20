const sum = require('./sum.js');

 describe('testar soma!', () => {
  it('Testa se o retorno de sum(4, 5) é 9.', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('Testa se o retorno de sum(0, 0) é 0.', () => {
    expect(sum(0, 0)).toEqual(0);
  });
 });