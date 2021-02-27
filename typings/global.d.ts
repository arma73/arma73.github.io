import _React from "react";

declare global {
    const __PROD__: boolean;
    const React: typeof _React;
    declare type ObjectOf<T> = { [P in keyof T]: T[P] };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    declare type FunctionOf<A = any, R = unknown> = (...args: A[]) => R;
}
