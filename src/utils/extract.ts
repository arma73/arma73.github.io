import {
    Content,
    StructureContentType,
    DirectoryContentChilds,
    ContentExtension,
    FlattenContentChild,
} from "_src/interfaces/content.interface";
import { Articles, HeadArticles } from "_interfaces/articles.interface";
import { Location } from "history";
import { flattenContent } from "./flattenContent";

/**
 * Get top-level sections
 *
 * @return {array}       - Immediate children of the given `tree` that are directories
 */
export const extractSections = (tree: Content): DirectoryContentChilds[] =>
    tree.children.filter(
        item => item.type === StructureContentType.DIRECTORY
    ) as DirectoryContentChilds[];

/**
 * Find content with matching location pathname
 */
export const extractCurrentSection = (
    sections: DirectoryContentChilds[],
    pathname: Location["pathname"]
): DirectoryContentChilds | undefined =>
    sections.find(({ url }) => pathname.startsWith(url));

/**
 * Get all markdown pages
 */
export const extractPages = (tree: Content): FlattenContentChild[] =>
    flattenContent(tree).filter(
        item =>
            item.extension === ContentExtension.MD ||
            item.extension === ContentExtension.MDX
    );

export const extractHeadArticles = (listArticles: Articles[]): HeadArticles[] =>
    listArticles.map(({ desc, title, url }) => ({
        desc,
        title,
        url,
    }));
