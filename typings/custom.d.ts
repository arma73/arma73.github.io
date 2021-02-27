import { Content } from "_src/interfaces/content.interface";

declare namespace Content {
    declare module "*/_content" {
        const value: Content;
        export default value;
    }
}
