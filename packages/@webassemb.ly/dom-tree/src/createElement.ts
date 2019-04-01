import { VDOMNode, VDOMParams } from './types';
import { ERROR_ARGUMENTS_LENGTH } from './constants';

export default function createElement(
  namespace: string,
  tag: string,
  ...params: VDOMParams
): VDOMNode {
  const properties: VDOMNode = { namespace, tag };

  switch (params.length) {
    case 2: {
      const [attributes, children] = params;

      properties.attributes = attributes;
      properties.children = [].concat(children);

      break;
    }
    case 1: {
      const [param] = params;

      if (Array.isArray(param) || typeof param === 'string') {
        properties.children = [].concat(param);
      } else {
        properties.attributes = param;
      }

      break;
    }
    case 0: break;
    default: {
      throw new Error(ERROR_ARGUMENTS_LENGTH);
    }
  }

  return Object.freeze(properties);
}