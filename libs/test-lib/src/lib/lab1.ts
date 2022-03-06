/*
реализуйте метод boolean swap(int i, int j, int[] anArray),
меняющий местами элементы по индексам i и j в массиве anArray и возвращающий false,
если индексы выходят за пределы массива

Напишите обобщенный метод для перестановки двух элементов в списке по индексам. Напишите junit-тесты.
*/

export function swap<T>(i: number, j: number, list: T[]): boolean {
  if (i >= list.length || j >= list.length || i < 0 || j < 0) {
    return false;
  }

  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;

  return true;
}
