import { IfEquals } from "./tools.interface";

export type FilterNullFields<T> = {
    [K in keyof T]: T[K] extends ObjectOf<T>
        ? FilterNullFields<T[K]>
        : NonNullable<T[K]>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type FilterFields<T, I, V> = T extends (infer _R)[]
    ? FilterFieldsObject<T, I, V>
    : {
          [K in keyof T]: IfEquals<T[K], I> extends I ? V : T[K];
      };

type FilterFieldsObject<T, I, V> = {
    [K in keyof T]: FilterFields<T[K], I, V>;
};

export type DeepFilterFields<T, I, V> = T extends ObjectOf<T>
    ? DeepFilterFieldsObject<T, I, V>
    : IfEquals<T, I> extends I
    ? V extends I
        ? V
        : T
    : T;

type DeepFilterFieldsObject<T, I, V> = {
    [K in keyof T]: DeepFilterFields<T[K], I, V>;
};
