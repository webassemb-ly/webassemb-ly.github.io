import {HTML_NS} from '../../src/constants';
import html from '../../src/namespaces/html';

describe('html', () => {
  describe('parameters', () => {
    let node: ReturnType<typeof html>;
    let tag = 'div';
    let attributes = { 'class': 'blah' };

    beforeAll(() => {
      node = html(tag, attributes);
    })

    it('should have the html namespace', () => {
      expect(node.namespace).toBe(HTML_NS);
    });

    it('should specify a tag', () => {
      expect(node.tag).toBe(tag);
    });

    it('should have the specified attributes', () => {
      expect(node.attributes).toBe(attributes);
    });
  });
});