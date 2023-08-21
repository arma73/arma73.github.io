/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
    const content: any;
    export const ReactComponent: any;
    export default content;
}

declare module "#web/collections/authors.json" {
    const authors: Array<{
        username: string;
        avatar: string;
        twitter: string;
    }>;
    export default authors;
}
