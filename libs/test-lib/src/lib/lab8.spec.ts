import { flatMatrix, generateRandomMatrix, getAverage } from './lab8';

describe('average in array', () => {
  beforeEach(() => {
    jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.7)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.9);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should generate random matrix', () => {
    // act
    const result = generateRandomMatrix(3);

    // assert
    expect(result).toStrictEqual([
      [19, 28, 37],
      [46, 55, 64],
      [73, 82, 91],
    ]);
  });

  it('should flat matrix', () => {
    // arrange
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    // act
    const result = flatMatrix(matrix);

    // assert
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should get average', () => {
    // arrange
    const matrix: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // act
    const result = getAverage(matrix, (value) => value);

    // assert
    expect(result).toStrictEqual(5);
  });

  it('should get 0 average for empty array', () => {
    // arrange
    const matrix: number[] = [];

    // act
    const result = getAverage(matrix, (value) => value);

    // assert
    expect(result).toStrictEqual(0);
  });
});
