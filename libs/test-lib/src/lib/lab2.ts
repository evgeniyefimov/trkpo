/*
реализуйте метод int min(int a, int b, int c),
находящий минимальный из трех аргументов без использования утилитарных функций стандартной библиотеки.
*/

export function findMin(...args: number[]): number {
  const min = args.reduce((min, num) => (num < min ? num : min), args[0]);

  return min;
}
