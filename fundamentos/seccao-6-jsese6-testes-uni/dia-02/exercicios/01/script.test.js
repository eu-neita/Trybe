const myRemove = require('./script');

test('sverifica array', () => {

  expect(myRemove([1, 2, 3, 4])).toBe(3);

});