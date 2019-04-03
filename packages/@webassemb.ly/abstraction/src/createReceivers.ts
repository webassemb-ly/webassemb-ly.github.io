import { ApplicationInterface } from './types';
import { createReceiver } from './utils';

/**
 * Take an `instance` of an interface and return the receiver interface for it
 * 
 * @param instance The instance to create receivers for
 * @return The receiver interface
 */
export function createInterface<T extends object>(
  i: T,
): Partial<ApplicationInterface<T>>  {
  const applyInterface: Partial<ApplicationInterface<T>> = {};

  for (let key of Object.keys(i)) {
      const value = i[key];

      if (typeof value === 'function') {
          applyInterface[key] = createReceiver(value);
      } else {
          applyInterface[key] = value;
      }
  }

  return applyInterface;
}
