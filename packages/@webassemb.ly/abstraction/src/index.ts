import {AnyFunction} from '@webassemb.ly/utils';

// Abstraction interface for creating abstract syntax trees dynamically from
// generation functions.

enum AbstractionKeys {
  params,
}

interface Abstraction<T extends AnyFunction> {
  (...params: Parameters<T>): { [AbstractionKeys.params]: Parameters<T> }
}

type AbstractInterface<T extends object> = {
  [K in keyof T]: T[K] extends AnyFunction ? Abstraction<T[K]> : T[K];
}

interface Signal<T extends AnyFunction> {
  [AbstractionKeys.params]: Parameters<T>
}

interface Application<T extends AnyFunction> {
  ({ [AbstractionKeys.params]: params }: Signal<T>): ReturnType<T>
}

type ApplicationInterface<T extends object> = {
  [K in keyof T]: T[K] extends AnyFunction ? Application<T[K]> : T[K];
}

enum SignalKeys {
  emitters,
  receivers,
}

interface SignalInterface<T extends object> {
  [SignalKeys.emitters]: Partial<AbstractInterface<T>>,
  [SignalKeys.receivers]: Partial<ApplicationInterface<T>>
}

function createInterface<T extends object>(
  i: T,
): SignalInterface<T>  {
  const abstractInterface: Partial<AbstractInterface<T>> = {};
  const applyInterface: Partial<ApplicationInterface<T>> = {};

  for (let key of Object.keys(i)) {
      const value = i[key];

      if (typeof value === 'function') {
          abstractInterface[key] = (...params: Parameters<typeof value>) => ({
              parameters: params
          });
          applyInterface[key] = ({
            [AbstractionKeys.params]: params
          }: Signal<typeof value>) => value(...params);
      } else {
          abstractInterface[key] = value;
          applyInterface[key] = value;
      }
  }

  return {
    [SignalKeys.emitters]: abstractInterface,
    [SignalKeys.receivers]: applyInterface
  };
}
