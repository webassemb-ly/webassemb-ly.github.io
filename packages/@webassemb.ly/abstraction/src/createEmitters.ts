import { AbstractionInterface } from './types';
import { createEmitter } from './utils';

/**
 * Take an `instance` of an interface and return the emitter interface for it
 * 
 * @param instance The instance to create emitters for
 * @return The emitter interface
 */
export function createInterface<T extends object>(
  instance: T,
): Partial<AbstractionInterface<T>>  {
  const abstractInterface: Partial<AbstractionInterface<T>> = {};

  for (let key of Object.keys(instance)) {
      const value = instance[key];

      if (typeof value === 'function') {
          abstractInterface[key] = createEmitter(value);
      } else {
          abstractInterface[key] = value;
      }
  }

  return abstractInterface;
}
