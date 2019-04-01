import { AnyFunction } from '@webassemb.ly/utils';
import { SignalType } from './constants';
import { all, call, promise, race } from './receivers';
import { Signals } from './types';

export default function protocol(
  next: AnyFunction,
  signal: Signals,
) {
  switch(signal.type) {
    case SignalType.All: {
      const { entries } = signal;

      return all(next, entries);
    }
    case SignalType.Call: {
      const { callback, args } = signal;

      return call(next, callback, args);
    }
    case SignalType.Promise: {
      const { promise: async } = signal;

      return promise(next, async);
    }
    case SignalType.Race: {
      const { contestants } = signal;

      return race(next, contestants);
    }
    default:
      return next(signal);
  }
}
