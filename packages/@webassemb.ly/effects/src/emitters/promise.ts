import { SignalType } from '../constants';

export default function promise<T extends Promise<any>>(
  promise: T
): { type: typeof SignalType.Promise, promise: T } {
  return { 
    type: SignalType.Promise,
    promise,
  };
}
