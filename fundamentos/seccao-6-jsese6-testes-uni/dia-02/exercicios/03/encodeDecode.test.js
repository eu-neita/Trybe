const { encode, decode } = require('./encodeDecode.js');

describe('testa a função encode decode', () => {
  it('verifica se encode decode é função', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('testa retorno da encode', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('testa retorno da decode', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  it('testa retorno da encode se está livrando outros caracteres', () => {
    expect(encode('qwrty')).toEqual('qwrty');
    expect(encode('psdf')).toEqual('psdf');
    expect(encode('ghjklç')).toEqual('ghjklç');
    expect(encode('zxcvbnm')).toEqual('zxcvbnm');
  });
  it('testa retorno da decode se está livrando outros caracteres', () => {
    expect(decode('67890')).toEqual('67890');
  });
  it('testa retorno da string tem mesma quantidade de caracteres', () => {
    expect(decode('67890').length).toEqual(5);
    expect(encode('nan').length).toEqual(3);
  });
});

