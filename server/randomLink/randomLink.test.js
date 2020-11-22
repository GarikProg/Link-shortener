const randomString = require('./randomLink.js');

test('return string certain length', () => {
  const string = randomString(6);
  expect(string.length).toBe(6);
});
