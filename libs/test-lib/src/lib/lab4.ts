/*
Spaceship:
"Имеется класс Spaceship. Создайте 3 экземпляра. Напишите методы, которые находят:
a) среднюю скорость кораблей
б) минимальную скорость кораблей

Класс Spaceship сохраните в отдельном файле:
public class Spaceship {
    private int speed;
    public Spaceship(int speed) {
        this.speed = speed;
    }

    public int getSpeed() {
        return speed;
    }
}

Подсказка 1:
Вот так можно создать один экземпляр и передать значение скорости 123:
Spaceship s1 = new Spaceship(123);

Подсказка 2: что будет, если скорости кораблей велики, например, находятся в окрестности Integer.MAX_VALUE?"
*/

export class Spaceship {
  #speed: number;

  constructor(speed: number) {
    this.#speed = speed;
  }

  public get speed(): number {
    return this.#speed;
  }
}

export function computeAverage(...spacehips: Spaceship[]) {
  return spacehips.reduce((acc, val, index) => {
    const n = index + 1;

    return ((n - 1) / n) * acc + val.speed / n;
  }, 0);
}
