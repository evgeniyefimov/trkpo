/**
 * Аббревиатура:
 * Напишите функцию, создающую аббревиатуры. Например, на входе строка:
 * "Санкт-Петербургский Государственный Технический Институт им. Патриса Лумумбы". На выходе строка: СПБГТИПЛ.
 */
export function getAbbreviation(value: string): string {
  return value
    .split(/[\s-]+/)
    .map((word) => word[0])
    .filter(
      (symbol) =>
        symbol !== symbol.toLowerCase() && symbol === symbol.toUpperCase()
    )
    .join('');
}
