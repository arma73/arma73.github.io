import { ContentChild } from "_src/interfaces/content.interface";
import { Articles } from "_interfaces/articles.interface";

/**
 * Strip any non-applicable properties
 */
export const _strip = (items: ContentChild[]): Articles[] => {
    const anchorTitleIndex: number = items.findIndex(
        item => item.name.toLowerCase() === "index.md"
    );

    if (anchorTitleIndex !== -1) {
        // changes the location of the file index.md to the starting position in the array items
        items.unshift(items[anchorTitleIndex]);
        items.splice(anchorTitleIndex + 1, 1);
    }

    return items.map<Articles>(
        ({ title, desc, name, url, group, sort, anchors, children }) => ({
            "title": title || name,
            "children": children ? _strip(children) : [],
            group,
            desc,
            url,
            sort,
            anchors,
        })
    );
};
