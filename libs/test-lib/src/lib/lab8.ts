/**
 * Среднее в массиве:
 * "Запишите в двумерный массив NxN случайные числа от 10 до 99. Размерность N получить из аргументов.
 * Напишите обобщенную функцию возвращающую одномерный массив из переданного двумерного.
 * Напишите обобщенную функцию, находящую среднее арифметическое значение элементов одномерного массива. Протестируйте обе функции."
 */
function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomMatrix(dimension: number): number[][] {
  return Array.from({ length: dimension }, () => {
    return Array.from({ length: dimension }, () =>
      randomIntFromInterval(10, 99)
    );
  });
}

export function flatMatrix<T>(matrix: T[][]): T[] {
  return matrix.flatMap((value) => value);
  // or with reduce
  // returm matrix.reduce((acc, val) => [...acc, ...val], []);
}

export function getAverage<T>(
  matrix: T[],
  predicate: (value: T) => number
): number {
  const sum = matrix.reduce((acc, val) => acc + predicate(val), 0);
  const avg = matrix.length ? sum / matrix.length : 0;

  return avg;
}
