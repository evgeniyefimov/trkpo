/**
 * Фигуры:
 * "Создать 10 случайных фигур Circle, Triangle, Rectangle со случайными параметрами – радиусом, длиной стороны.
 * Все классы фигур имплементируют интерфейс Shape с одним методом getArea():double, возвращающим площадь фигуры.
 * Найти фигуру с максимальной площадью, вывести информацию о ней: тип фигуры, параметры фигуры."
 */

export interface Shape {
  readonly info: string;
  getArea(): number;
}

export class Circle implements Shape {
  #readius: number;

  constructor(radius: number) {
    this.#readius = radius;
  }

  get info(): string {
    return `Circle with square: ${this.getArea()}`;
  }

  getArea(): number {
    return (Math.PI * this.#readius) ^ 2;
  }
}

export class Triangle implements Shape {
  #a: number;
  #b: number;
  #c: number;

  constructor(a: number, b: number, c: number) {
    this.#a = a;
    this.#b = b;
    this.#c = c;
  }

  get info(): string {
    return `Triangle with square: ${this.getArea()}`;
  }

  getArea(): number {
    const p = (this.#a + this.#b + this.#c) / 2;

    return Math.sqrt(p * (p - this.#a) * (p - this.#b) * (p - this.#c));
  }
}

export class Rectangle implements Shape {
  #a: number;
  #b: number;

  constructor(a: number, b: number) {
    this.#a = a;
    this.#b = b;
  }

  get info(): string {
    return `Rectangle with square: ${this.getArea()}`;
  }

  getArea(): number {
    return this.#a * this.#b;
  }
}

export function findMaxShape(shapes: Shape[]): Shape | undefined {
  const max = shapes.reduce(
    (res, val) => (res.getArea() > val.getArea() ? res : val),
    shapes[0]
  );

  return max;
}
