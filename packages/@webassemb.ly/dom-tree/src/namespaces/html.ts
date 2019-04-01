import { VDOMParams, VDOMNode } from '../types';
import createElement from '../createElement';
import { HTML_NS } from '../constants';

export default function html(
  tag: string,
  ...params: VDOMParams
): VDOMNode {
  return createElement(HTML_NS, tag, ...params);
}