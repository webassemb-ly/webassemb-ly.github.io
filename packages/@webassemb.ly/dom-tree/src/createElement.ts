import { VDOMNode, VDOMParams } from './types';
import { INVALID_ARGUMENTS, ERROR_ARGUMENTS_LENGTH } from './constants';

export default function createElement(
  namespace: string,
  tag: string,
  ...params: VDOMParams
): VDOMNode {
  if (typeof tag !== 'string') throw new Error(ERROR_ARGUMENTS_LENGTH);

  const properties: VDOMNode = { namespace, tag };

  switch (params.length) {
    case 2: {
      const [attributes, children] = params;

      if (
        Array.isArray(attributes) ||
        !(Array.isArray(children) || typeof children === 'string')
      ) {
        throw new Error(INVALID_ARGUMENTS);
      }

      properties.attributes = attributes;
      properties.children = [].concat(children);

      break;
    }
    case 1: {
      const [param] = params;

      if (Array.isArray(param) || typeof param === 'string') {
        properties.children = [].concat(param);
      } else if (typeof param === 'object') {
        properties.attributes = param;
      } else {
        throw new Error(INVALID_ARGUMENTS);
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