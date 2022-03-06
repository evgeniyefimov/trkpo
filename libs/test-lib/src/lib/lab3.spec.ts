import { findMin } from './lab3';

describe('lab3', () => {
  it('should find min value for primitives', () => {
    // arrange
    const list = [1, 3, 2, 6, 4, 5];

    // act
    // should find min in [3, 2] array
    const result = findMin(list, 1, 3);

    // assert
    expect(result).toBe(2);
  });

  it('should find min value for objects', () => {
    // arrange
    const list = [
      { counter: 1 },
      { counter: 3 },
      { counter: 2 },
      { counter: 6 },
      { counter: 4 },
      { counter: 5 },
    ];

    // act
    // should find min in [{ counter: 3 }, { counter: 2 }] array
    const result = findMin(list, 1, 3, (a, b) => a.counter - b.counter);

    // assert
    expect(result).toStrictEqual({ counter: 2 });
  });
});
