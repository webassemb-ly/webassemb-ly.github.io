import 'jasmine';
import invariant from '../src/invariant';

describe('invariant', () => {
  describe('parameters', () => {
    let assertion: boolean;

    beforeAll(() => {
      assertion = false;
    })

    it('It should allow only a boolean as input', () => {
      expect(
        () => invariant(assertion)
      ).toThrowError('🚫');
    });

    it('It should take an optional message', () => {
      const errorMessage = '🚫';

      expect(
        () => invariant(assertion, errorMessage)
      ).toThrowError(errorMessage);
    });
  });

  describe('returns', () => {
    let assertion: boolean;

    beforeAll(() => {
      assertion = true;
    });

    it('It should return the assertion if successful', () => {
      expect(invariant(assertion)).toEqual(assertion);
    });
  });
});