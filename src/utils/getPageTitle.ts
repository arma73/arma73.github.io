import { Content } from "_src/interfaces/content.interface";
import { Location } from "history";
import { findInContent } from "./findInContent";

/**
 * Retrieve the page title from the given `tree` based on the given `path`
 */
export const getPageTitle = (
    tree: Content,
    path: Location["pathname"]
): string | undefined => {
    const page = findInContent(tree, item => item.url === path);
    let title: string | undefined;

    if (!page) {
        if (!path.endsWith("/")) path += "/";
        title = path.replace(/.*\/(.+)\//g, "$1");
        title = title.replace(/-/g, " ");
    } else if (path === "/") {
        title = page.title;
    } else title = `${page.title}`;

    return title;
};
