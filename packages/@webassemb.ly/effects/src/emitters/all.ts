import { SignalType } from '../constants';

export default function all<T extends Array<Promise<any>>>(
  entries: T
): { type: typeof SignalType.All, entries: T } {
  return { 
    type: SignalType.All,
    entries,
  };
}
