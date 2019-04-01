import {
  AnyFunction,
  Protocol,
  IteratorResultValue
} from './types';

export default function iterate<T extends IterableIterator<any>, P extends (next: AnyFunction, value: any) => any>(
  iterator: T,
  protocol: Protocol<P>
) {
  function next(
    prevValue?: IteratorResultValue<IteratorResult<T>> | ReturnType<P>
  ): ReturnType<P> {
    const { done, value } = iterator.next(prevValue);
    
    return !done
      ? protocol
        ? protocol(next, value)
        : next(value)
      : value;
  }

  return next();
};
