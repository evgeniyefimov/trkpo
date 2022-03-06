import { getAbbreviation } from './lab7';

describe('getAbbr', () => {
  it('should get abbreviation', () => {
    // arrage
    const value =
      'Санкт-Петербургский Государственный Технический Институт им. Патриса Лумумбы';

    // act
    const result = getAbbreviation(value);

    // assert
    expect(result).toBe('СПГТИПЛ');
  });
});
