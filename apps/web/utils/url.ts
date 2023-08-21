export function absoluteUrl(path: string) {
    return `${process.env.HOST}${path}`;
}
