/**
 * Hello:
 * "Приложение с иллюстрацией Наследования, Инкапсуляции, Полиморфизма
 * Класс HelloSpeaker реализует метод sayHello(), выводя на консоль “hello”
 * Класс RussianSpeaker, наследует от него и «говорит» по-русски"
 */

export class HelloSpeaker {
  sayHello(): string {
    return 'hello';
  }
}

export class RussianSpeaker extends HelloSpeaker {
  override sayHello(): string {
    return 'привет';
  }
}
