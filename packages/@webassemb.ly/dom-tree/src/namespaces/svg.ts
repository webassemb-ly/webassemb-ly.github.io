import { VDOMParams, VDOMNode } from '../types';
import createElement from '../createElement';
import { SVG_NS } from '../constants';

export default function svg(
  tag: string,
  ...params: VDOMParams
): VDOMNode {
  return createElement(SVG_NS, tag, ...params);
}