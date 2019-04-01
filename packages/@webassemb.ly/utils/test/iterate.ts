import 'jasmine';
import iterate from '../src/iterate';

describe('iterate', () => {
  const one = 'one';
  const two = 'two';
  const three = 'three';

  function* iterator() {
    const x = yield 1;
    const y = yield 2;
    const z = yield 3;

    return x + y + z;
  }

  function protocol(
    next: AnyFunction,
    x: 1 | 2 | 3
  ) {
    let y;
    
    switch (x) {
      case 1: return next(one);
      case 2: return next(two);
      case 3: return next(three);
      default: return next(x);
    }
  }

  describe('parameters', () => {
    it('should run the given protocol for each yielded value', () => {
      expect(
        () => iterate(iterator(), protocol)
      ).not.toThrow();
    })
  });

  describe('returns', () => {
    it(`It should return '${one}' + '${two}' + '${three}'`, () => {
      expect(
        iterate(iterator(), protocol)
      ).toEqual(one + two + three);
    });
  });
});