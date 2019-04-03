import {AnyFunction} from '@webassemb.ly/utils';

/**
 * An enumerable of the keys used when defining a new abstraction
 */
export enum AbstractionKeys {
  params,
}

/**
 * A factory function which returns an abstract syntax tree (AST) node for `T`
 */
export interface Abstraction<T extends AnyFunction> {
  (...params: Parameters<T>): { [AbstractionKeys.params]: Parameters<T> }
}

/**
 * An interface instance which contains _Abstractions_
 */
export type AbstractionInterface<T extends object> = {
  [K in keyof T]: T[K] extends AnyFunction ? Abstraction<T[K]> : T[K];
}

/**
 * An AST node for `T`
 */
export interface Signal<T extends AnyFunction> {
  [AbstractionKeys.params]: Parameters<T>
}

/**
 * A factory function which returns the return type return type of `T`
 */
export interface Application<T extends AnyFunction> {
  ({ [AbstractionKeys.params]: params }: Signal<T>): ReturnType<T>
}

/**
 * An interface instance which receives _Applications_
 */
export type ApplicationInterface<T extends object> = {
  [K in keyof T]: T[K] extends AnyFunction ? Application<T[K]> : T[K];
}

/**
 * An enumerable of the keys used when defining a new signal interface
 */
export enum SignalKeys {
  emitters,
  receivers,
}

/**
 * An interface with namespaced interfaces for both emitters and receivers
 */
export interface SignalInterface<T extends object> {
  [SignalKeys.emitters]: Partial<AbstractionInterface<T>>,
  [SignalKeys.receivers]: Partial<ApplicationInterface<T>>
}