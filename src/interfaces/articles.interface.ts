import { ContentChild } from "./content.interface";

export interface Articles
    extends Omit<
        ContentChild,
        "path" | "name" | "size" | "type" | "extension" | "children"
    > {
    "children": Articles[];
}

export interface HeadArticles {
    "desc"?: string;
    "title"?: string;
    "url"?: string;
}
