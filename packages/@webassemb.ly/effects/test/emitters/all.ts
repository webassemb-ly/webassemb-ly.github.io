import 'jasmine';
import all from '../../src/emitters/all';
import { SignalType } from '../../src/constants';

describe('all emitter', () => {
  const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

  describe('parameters', () => {
    it('should take an array of promises', () => {
      expect(
        () => all(promises)
      ).not.toThrow();
    });
  });

  describe('returns', () => {
    it('Should return SignalType.All', () => {
      expect(
        all(promises).type
      ).toBe(SignalType.All);
    });

    it('Should return SignalType.All', () => {
      expect(
        all(promises).entries
      ).toBe(promises);
    });
  });
});