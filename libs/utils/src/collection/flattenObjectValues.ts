type FlattenObjectValues<T> = Array<
    T extends ReadonlyArray<infer InnerArr> ? InnerArr : T
>;

export function flattenObjectValues<T extends Record<string, any>>(
    obj: T
): FlattenObjectValues<T[keyof T]> {
    return Object.values(obj)
        .filter(value => !!value)
        .flat<Array<T[keyof T]>>();
}
