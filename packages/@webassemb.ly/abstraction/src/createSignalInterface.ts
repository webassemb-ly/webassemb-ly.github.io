import {
  SignalInterface,
  AbstractionInterface,
  ApplicationInterface,
  SignalKeys,
} from './types';
import { createEmitter, createReceiver } from './utils';

/**
 * Take an `instance` of an interface and return the receiver interface for it
 * 
 * @param instance The instance to create receivers for
 * @return The receiver interface
 */
export function createInterface<T extends object>(
  i: T,
): SignalInterface<T>  {
  const abstractInterface: Partial<AbstractionInterface<T>> = {};
  const applyInterface: Partial<ApplicationInterface<T>> = {};

  for (let key of Object.keys(i)) {
      const value = i[key];

      if (typeof value === 'function') {
          abstractInterface[key] = createEmitter(value);
          applyInterface[key] = createReceiver(value);
      } else {
          abstractInterface[key] = value;
          applyInterface[key] = value;
      }
  }

  return {
    [SignalKeys.emitters]: abstractInterface,
    [SignalKeys.receivers]: applyInterface
  };
}
