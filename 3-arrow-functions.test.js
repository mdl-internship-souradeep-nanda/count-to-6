const q3 = require('./3-arrow-functions');

test('Ideal case', () => {
  const inputArray = ['abc', 'def', 'ghi'];
  const expectedString = 'adg';
  expect(q3.mapReduce(inputArray)).toBe(expectedString);
});