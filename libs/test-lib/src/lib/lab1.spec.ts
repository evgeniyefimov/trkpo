import { swap } from './lab1';

describe('lab1', () => {
  it('should swap elements in array', () => {
    // arrange
    const list = [1, 2, 3, 4];
    const expected = [2, 1, 3, 4];

    // act
    const result = swap(0, 1, list);

    // assert
    expect(result).toBe(true);
    expect(list).toStrictEqual(expected);
  });

  it('should return false when indices out of range', () => {
    // arrange
    const list = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];

    // act
    const result = swap(-1, 1, list);

    // assert
    expect(result).toBe(false);
    expect(list).toStrictEqual(expected);
  });

  it('should swap objects in array', () => {
    // arrange
    const list = [
      { counter: 1 },
      { counter: 2 },
      { counter: 3 },
      { counter: 4 },
    ];
    const expected = [
      { counter: 2 },
      { counter: 1 },
      { counter: 3 },
      { counter: 4 },
    ];

    // act
    const result = swap(0, 1, list);

    // assert
    expect(result).toBe(true);
    expect(list).toStrictEqual(expected);
  });
});
