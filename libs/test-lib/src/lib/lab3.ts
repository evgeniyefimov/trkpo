/*
Мин лист:
Напишите обобщенный метод для поиска минимального элемента списка в диапазоне [begin, end).
Где [ – включительно, ) – исключительно. Напишите unit-тесты.
*/

export function findMin<T extends object>(
  list: T[],
  begin: number,
  end: number,
  predicate: (a: T, b: T) => number
): T;
export function findMin<T extends number | string | boolean>(
  list: T[],
  begin: number,
  end: number,
  predicate?: (a: T, b: T) => number
): T;
export function findMin<T>(
  list: T[],
  begin: number,
  end: number,
  predicate?: (a: T, b: T) => number
): T {
  const slice = list.slice(begin, end);
  const sorted = predicate ? slice.sort(predicate) : slice.sort();

  return sorted[0];
}
