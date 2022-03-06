import { reverseString } from './lab6';

describe('reverseString', () => {
  it('should reverse string', () => {
    // arrage
    const value = 'Hello world!';

    // act
    const result = reverseString(value);

    // assert
    expect(result).toBe('!dlrow olleH');
  });
});
