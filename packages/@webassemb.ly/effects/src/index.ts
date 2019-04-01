import { iterate } from '@webassemb.ly/utils';
import protocol from './protocol';

export * from './emitters';

export default function emit<T>(
  iterator: IterableIterator<T>
) {
  return iterate(iterator, protocol);
}
