import {SVG_NS} from '../../src/constants';
import svg from '../../src/namespaces/svg';

describe('svg', () => {
  describe('parameters', () => {
    let node: ReturnType<typeof svg>;
    let tag = 'div';
    let attributes = { 'class': 'blah' };

    beforeAll(() => {
      node = svg(tag, attributes);
    })

    it('should have the html namespace', () => {
      expect(node.namespace).toBe(SVG_NS);
    });

    it('should specify a tag', () => {
      expect(node.tag).toBe(tag);
    });

    it('should have the specified attributes', () => {
      expect(node.attributes).toBe(attributes);
    });
  });
});