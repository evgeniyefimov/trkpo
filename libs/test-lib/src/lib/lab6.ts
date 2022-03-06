/**
 * Строка наоборот:
 * Напишите функцию, отображающую переданную строку задом наперёд. Напишите тесты.
 */
export function reverseString(value: string): string {
  return value.split('').reverse().join('');
}
