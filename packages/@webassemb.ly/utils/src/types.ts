/**
 * Defines the type for a generic function
 */
interface AnyFunction {
  (...args: any[]): any;
}

/**
 * Return the union of an array of types
 */
export type OneOf<T> =
  T extends Array<infer U> ? U :
  never;

/**
 * Convert the expression T to () => T
 */
export type EtaExpansion<T> = (...args: any[]) => T

/**
 * Infer the return value of an `IteratorResult`
 */
export type IteratorResultValue<T> =
  T extends { done: boolean, value: infer U } ? U :
  never;

/**
 * Infer the return type of a `Promise`
 */
export type PromiseReturnType<T> =
  T extends Promise<infer U> ? U :
  never;

/**
 * Extract from `T` the type of the named property `K`
 */
export type PropertyType<T, K extends keyof T> = T[K];

/**
 * Assertion for protocols
 */
export type Protocol<T> =
  T extends (next: AnyFunction, value: NotNull<any>) => any ? T :
  never;

/**
 * Alias for Exclude
 */
export type Not<T, U> = Exclude<T, U>;

/**
 * Alias for NonNullable
 */
export type NotNull<T> = NonNullable<T>;

/**
 * Assert not of type function
 */
export type NotFunction<T> = Not<T, AnyFunction>;
