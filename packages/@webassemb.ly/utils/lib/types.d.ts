export declare type AnyFunction = (...args: any[]) => any;
export declare type OneOf<T> = T extends Array<infer U> ? U : never;
export declare type EtaExpansion<T> = (...args: any[]) => T;
export declare type IteratorResultValue<T> = T extends {
    done: boolean;
    value: infer U;
} ? U : never;
export declare type PromiseReturnType<T> = T extends Promise<infer U> ? U : never;
export declare type PropertyType<T, K extends keyof T> = T[K];
export declare type Protocol<T> = T extends (next: AnyFunction, value: NotNull<any>) => any ? T : never;
export declare type Not<T, U> = Exclude<T, U>;
export declare type NotNull<T> = NonNullable<T>;
export declare type NotFunction<T> = Not<T, AnyFunction>;
