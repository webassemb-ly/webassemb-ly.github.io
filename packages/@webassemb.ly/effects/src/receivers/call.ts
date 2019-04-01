import { iterate } from '@webassemb.ly/utils';
import protocol from '../protocol';

export default function call<T extends AnyFunction, U extends AnyFunction>(
  next: T,
  callback: U,
  args: Parameters<U>
) {
  const instance = callback(...args);

  if (
    instance !== null &&
    typeof instance === 'object' &&
    instance.next
  ) {
    return next(iterate(instance, protocol));
  } else {
    return next(instance);
  }
}
