/*
Компаратор:
"Создать класс Person с полями: name, surname, age.
Имплементировать интерфейс Comparable, используя поля surname и name.
Добавить несколько объектов Person в List. Использовать Comparator для различных типов сортировки.
Вывести: 
1) неотсортированный список, 
2) список, отсортированный по name,
3) список, отсортированный по surname, 
4) список, отсортированный по age"
*/

export class Person {
  public name: string;
  public surname: string;
  public age: number;

  constructor(obj: Person) {
    this.name = obj.name;
    this.surname = obj.surname;
    this.age = obj.age;
  }
}
