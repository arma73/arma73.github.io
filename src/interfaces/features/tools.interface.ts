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

export type SetDifference<A, B> = A extends B ? never : A;
export type SetComplement<A, A1 extends A> = SetDifference<A, A1>;
export type Subtract<T extends T1, T1 extends object> = Pick<
    T,
    SetComplement<keyof T, keyof T1>
>;
