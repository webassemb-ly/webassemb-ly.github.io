import { SignalType } from '../constants';

export default function all<T extends Array<Promise<any>>>(
  contestants: T
): { type: typeof SignalType.Race, contestants: T } {
  return { 
    type: SignalType.Race,
    contestants,
  };
}
