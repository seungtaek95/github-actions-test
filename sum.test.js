const sum = require('./sum')

test('3 + 5 = 8', () => {
  expect(sum(3, 5)).toBe(8)
})