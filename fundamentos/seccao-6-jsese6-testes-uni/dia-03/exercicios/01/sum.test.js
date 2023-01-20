const sum = require('./sum.js');

 describe('testar soma!', () => {
  it('Testa se o retorno de sum(4, 5) é 9; ', () => {
    expect(sum(4, 5)).toEqual(9);
  });
 });