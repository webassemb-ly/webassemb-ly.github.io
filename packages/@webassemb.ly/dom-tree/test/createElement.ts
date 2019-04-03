import createElement from '../src/createElement';

describe('createElement', () => {
  let ns: string | null;
  let tag: string;

  beforeAll(() => {
    ns = 'namespace';
    tag = 'tag';
  })

  describe('parameters', () => {
    it('should take a namespace and tag', () => {
      expect(() => {
        createElement(ns, tag);
      }).not.toThrow();
    });

    it('should take a child in the form of a string', () => {
      const child = 'child';

      expect(() => {
        createElement(ns, tag, child);
      }).not.toThrow();
    });

    it('should take an array of children', () => {
      const child = ['child'];

      expect(() => {
        createElement(ns, tag, child);
      }).not.toThrow();
    });

    it('should take an object of attributes', () => {
      const attr = { key: 'value' };

      expect(() => {
        createElement(ns, tag, attr);
      }).not.toThrow();
    });

    it('should take an object of attributes and a string child', () => {
      expect(() => {
        const attr = { key: 'value' };
        const child = 'child';

        createElement('x', 'y', attr, child);
      }).not.toThrow();
    });

    it('should take an object of attributes and an array of childern', () => {
      expect(() => {
        const attr = { key: 'value' };
        const child = ['child'];

        createElement('x', 'y', attr, child);
      }).not.toThrow();
    });
  });

  describe('exceptions', () => {
    it('should throw if no arguments are specified', () => {
      expect(() => {
        // @ts-ignore
        return createElement()
      }).toThrow();
    });

    it('should throw if parameters are out of order', () => {
      expect(() => {
        // @ts-ignore
        return createElement(ns, tag, [], {})
      }).toThrow();
    })
  });

  describe('returns', () => {
    it('should define a namespace', () => {
      const element = createElement(ns, tag);

      expect(element.namespace).toBe(ns);
    });

    it('should define a tag', () => {
      const element = createElement(ns, tag);

      expect(element.tag).toBe(tag);
    });

    it('should take a child in the form of a string', () => {
      const child = 'child';
      const element = createElement(ns, tag, child);

      expect(element.children[0]).toBe(child);
    });

    it('should take an array of children', () => {
      const children = ['child_0', 'child_1'];
      const element = createElement(ns, tag, children);

      expect(element.children).toEqual(children);
    });

    it('should take an object of attributes', () => {
      const key = 'key';
      const value = 'value';
      const attributes = { [key]: value };
      const element = createElement(ns, tag, attributes);

      expect(element.attributes.key).toBe(value);
    });

    it('should take an object of attributes and a string child', () => {
      const child = 'child';
      const attributes = { key: 'value' };
      const element = createElement(ns, tag, attributes, child);

      expect(element.children[0]).toBe(child);
    });

    it('should take an object of attributes and an array of childern', () => {
      const attr = { key: 'value' };
      const children = ['child_0', 'child_1'];
      const element = createElement(ns, tag, attr, children);

      expect(element.children).toEqual(children);
    });
  });
})