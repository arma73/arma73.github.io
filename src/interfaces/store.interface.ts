export interface Action<T = string, P = null> {
    "type": T;
    "payload": P;
    "error"?: null | string;
}

export type Reducer<S, A> = (prevState: S, action: A) => S;
