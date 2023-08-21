export type MakeRequiredProps<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: T[P];
};
export type MakeRequiredAndNonNullableProps<T, K extends keyof T> = Omit<
    T,
    K
> & { [P in K]-?: NonNullable<T[P]> };
