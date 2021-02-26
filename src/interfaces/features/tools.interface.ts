export type DeepReadonly<T> = T extends (infer R)[]
    ? DeepReadonlyArray<R>
    : T extends FunctionOf
    ? T
    : T extends ObjectOf<T>
    ? DeepReadonlyObject<T>
    : T;

export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type IfEquals<T, U> = T extends U ? U : false;
