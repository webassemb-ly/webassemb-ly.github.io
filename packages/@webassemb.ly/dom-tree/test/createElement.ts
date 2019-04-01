import createElement from '../src/createElement';

describe('createElement', () => {
  describe('parameters', () => {
    it('should take a namespace and tag', () => {
      expect(() => {
        createElement('x', 'y');
      }).not.toThrow();
    });

    it('should take a child in the form of a string', () => {
      expect(() => {
        createElement('x', 'y', 'z');
      }).not.toThrow();
    });

    it('should take an array of children', () => {
      expect(() => {
        createElement('x', 'y', ['z']);
      }).not.toThrow();
    });

    it('should take an object of attributes', () => {
      expect(() => {
        createElement('x', 'y', { key: 'z' });
      }).not.toThrow();
    });

    it('should take an object of attributes and a string child', () => {
      expect(() => {
        createElement('x', 'y', { key: 'z' }, 'child');
      }).not.toThrow();
    });

    it('should take an object of attributes and an array of childern', () => {
      expect(() => {
        createElement('x', 'y', { key: 'z' }, ['child']);
      }).not.toThrow();
    });

    it('should throw')
  });

  describe('returns', () => {
    it('should define a namespace', () => {
      const namespace = 'x';
      const element = createElement(namespace, null);

      expect(element.namespace).toBe(namespace);
    });

    it('should define a tag', () => {
      const tag = 'x';
      const element = createElement(null, tag);

      expect(element.tag).toBe(tag);
    });

    it('should take a child in the form of a string', () => {
      const child = 'x';
      const element = createElement(null, null, child);

      expect(element.children[0]).toBe(child);
    });

    it('should take an array of children', () => {
      const children = ['x', 'y'];
      const element = createElement(null, null, children);

      expect(element.children).toBe(children);
    });

    it('should take an object of attributes', () => {
      const value = 'x';
      const attributes = { key: value };
      const element = createElement(null, null, attributes);

      expect(element.attributes.key).toBe(value);
    });

    it('should take an object of attributes and a string child', () => {
      const child = 'x';
      const attributes = { key: null };
      const element = createElement(null, null, attributes, child);

      expect(element.children[0]).toBe(child);
    });

    it('should take an object of attributes and an array of childern', () => {
      const attributes = { key: null };
      const children = ['x', 'y'];
      const element = createElement(null, null, attributes, children);

      expect(element.children).toBe(children);
    });
  });
})