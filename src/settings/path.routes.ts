export const PUBLIC_URL = process.env.PUBLIC_URL || "/";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export abstract class RoutePage {
    static readonly MAIN: string = PUBLIC_URL;
    static readonly ARTICLES: string = `${PUBLIC_URL}articles/`;
    static readonly ABOUTME: string = `${PUBLIC_URL}aboutme/`;
}
