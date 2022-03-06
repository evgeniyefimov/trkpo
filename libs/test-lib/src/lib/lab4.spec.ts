import { computeAverage, Spaceship } from './lab4';

describe('lab4', () => {
  it('should find average speed', () => {
    // arrange
    const list = [new Spaceship(200), new Spaceship(350), new Spaceship(500)];

    // act
    const result = computeAverage(...list);

    // assert
    expect(result).toBe(350);
  });

  it('should find average speed without overflow', () => {
    // arrange
    // Number.MAX_VALUE + 9.979202e291 >> Infinity
    const list = [new Spaceship(Number.MAX_VALUE), new Spaceship(9.979202e291)];

    // act
    const result = computeAverage(...list);

    // assert
    expect(result).toBe(8.98846567431158e307);
  });
});
