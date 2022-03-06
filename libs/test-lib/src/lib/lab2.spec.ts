import { findMin } from './lab2';

describe('lab2', () => {
  it.each([
    [1, 2, 3, 1],
    [3, 2, 4, 2],
    [10, 0, -1, -1],
  ])('should find min value', (a, b, c, expected) => {
    // act
    const result = findMin(a, b, c);

    // assert
    expect(result).toBe(expected);
  });
});
