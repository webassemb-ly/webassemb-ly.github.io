import { AnyFunction } from '@webassemb.ly/utils';
import { SignalType } from '../constants';

export default function call<T extends AnyFunction>(
  callback: T,
  ...args: Parameters<T>
): { type: typeof SignalType.Call, callback: T, args: Parameters<T> } {
  return { 
    type: SignalType.Call,
    callback,
    args,
  };
}
