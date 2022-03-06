import { Person } from './lab5';

describe('lab5', () => {
  it('should get sort by name', () => {
    // arrange
    const list = [
      new Person({ age: 20, name: 'John', surname: 'Doe' }),
      new Person({ age: 19, name: 'Max', surname: 'Wolf' }),
      new Person({ age: 21, name: 'Elizabeth', surname: 'Star' }),
    ];
    const comparator = (a: Person, b: Person) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    };

    // act
    const result = list.sort(comparator);

    // assert
    expect(result).toStrictEqual([
      new Person({ age: 21, name: 'Elizabeth', surname: 'Star' }),
      new Person({ age: 20, name: 'John', surname: 'Doe' }),
      new Person({ age: 19, name: 'Max', surname: 'Wolf' }),
    ]);
  });

  it('should sort by surname', () => {
    // arrange
    const list = [
      new Person({ age: 20, name: 'John', surname: 'Doe' }),
      new Person({ age: 19, name: 'Max', surname: 'Wolf' }),
      new Person({ age: 21, name: 'Elizabeth', surname: 'Star' }),
    ];
    const comparator = (a: Person, b: Person) => {
      return a.surname < b.surname ? -1 : a.surname > b.surname ? 1 : 0;
    };

    // act
    const result = list.sort(comparator);

    // assert
    expect(result).toStrictEqual([
      new Person({ age: 20, name: 'John', surname: 'Doe' }),
      new Person({ age: 21, name: 'Elizabeth', surname: 'Star' }),
      new Person({ age: 19, name: 'Max', surname: 'Wolf' }),
    ]);
  });

  it('should sort by age', () => {
    // arrange
    const list = [
      new Person({ age: 20, name: 'John', surname: 'Doe' }),
      new Person({ age: 19, name: 'Max', surname: 'Wolf' }),
      new Person({ age: 21, name: 'Elizabeth', surname: 'Star' }),
    ];
    const comparator = (a: Person, b: Person) => {
      return a.age < b.age ? -1 : a.age > b.age ? 1 : 0;
    };

    // act
    const result = list.sort(comparator);

    // assert
    expect(result).toStrictEqual([
      new Person({ age: 19, name: 'Max', surname: 'Wolf' }),
      new Person({ age: 20, name: 'John', surname: 'Doe' }),
      new Person({ age: 21, name: 'Elizabeth', surname: 'Star' }),
    ]);
  });
});
