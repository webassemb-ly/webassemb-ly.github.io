import { AnyFunction, Protocol } from './types';
export default function iterate<T extends IterableIterator<any>, P extends (next: AnyFunction, value: any) => any>(iterator: T, protocol: Protocol<P>): ReturnType<P>;
