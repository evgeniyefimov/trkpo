import { Circle, findMaxShape, Rectangle, Shape, Triangle } from './lab9';

describe('Figures', () => {
  it('should return max shaped', () => {
    // arrange
    const shapes = [
      new Circle(1.3),
      new Rectangle(2, 3),
      new Triangle(1, 2, 3),
      new Circle(1),
      new Rectangle(1, 4),
      new Triangle(3, 2, 2),
    ];

    // act
    const result = findMaxShape(shapes);

    // assert
    expect(result?.info).toStrictEqual('Rectangle with square: 6');
    expect(result).toStrictEqual(new Rectangle(2, 3));
  });

  it('should return undefined for empty array', () => {
    // arrange
    const shapes: Shape[] = [];

    // act
    const result = findMaxShape(shapes);

    // assert
    expect(result).toBeUndefined();
  });
});
