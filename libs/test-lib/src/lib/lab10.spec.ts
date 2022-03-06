import { HelloSpeaker, RussianSpeaker } from './lab10';

describe('Override', () => {
  it('should say hello from HelloSpeaker', () => {
    // arrange
    const speaker = new HelloSpeaker();

    // act
    const result = speaker.sayHello();

    // assert
    expect(result).toBe('hello');
  });

  it('should say hello from RussianSpeaker', () => {
    // arrange
    const speaker = new RussianSpeaker();

    // act
    const result = speaker.sayHello();

    // assert
    expect(result).toBe('привет');
  });
});
