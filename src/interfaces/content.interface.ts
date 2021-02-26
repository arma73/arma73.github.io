import { FilterFields } from "./features/filter.interface";

export interface Content {
    "path": string;
    "name": string;
    "children": ContentChild[];
    "size": number;
    "type": string;
    "url": string;
}

export interface ContentChild {
    "path": string;
    "name": string;
    "children"?: ContentChild[];
    "size": number;
    "type": string;
    "url": string;
    "extension"?: string;
    "anchors"?: Anchor[];
    "group"?: string;
    "title"?: string;
    "sort"?: number;
    "desc"?: string;
}

export interface Anchor {
    "title": string;
    "id": string;
    "level": number;
}

export interface FlattenContentChild extends Omit<ContentChild, "children"> {}

export type DirectoryContentChilds = FilterFields<
    ContentChild,
    StructureContentType,
    StructureContentType.DIRECTORY
>;

export type FilesContentChilds = FilterFields<
    ContentChild,
    StructureContentType,
    StructureContentType.FILE
>;

export interface Anchor {
    "title": string;
    "id": string;
    "level": number;
}

export enum ContentExtension {
    MD = ".md",
    MDX = ".mdx",
}

export interface PurpleRelated {
    "title"?: string;
    "url"?: string;
}

export enum StructureContentType {
    DIRECTORY = "directory",
    FILE = "file",
}

export interface FluffyRelated {
    "title": string;
    "url": string;
}
