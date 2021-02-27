import {
    Content,
    ContentChild,
    FlattenContentChild,
} from "_src/interfaces/content.interface";

/**
 * Deep flatten the given `tree`s child nodes
 *
 * @example
 *  # output
 *   ```
 *     [
 *         {
 *             "path": "src/content/sample/sample.md",
 *             "name": "sample.md",
 *             "size": 10641,
 *             "extension": ".md",
 *             "type": "file",
 *             "url": "/sample/",
 *             "anchors": [
 *             {
 *                 "title": "The Name",
 *                 "id": "the-name",
 *                 "level": 2
 *             }
 *             ],
 *             "title": "sample-title",
 *             "source": "https://raw.githubusercontent.com/**",
 *             "edit": "https://github.com/**",
 *             "repo": "https://github.com/**"
 *         },
 *     ]
 *   ```
 */
export const flattenContent = (
    tree: Content | ContentChild
): FlattenContentChild[] | [] => {
    if (tree.children) {
        const flattenedTree: FlattenContentChild[] = tree.children.reduce(
            (
                previousValue: FlattenContentChild[],
                currentValue: ContentChild
            ) => {
                const concatedValue = previousValue.concat(
                    Array.isArray(currentValue.children)
                        ? flattenContent(currentValue)
                        : currentValue
                );

                return concatedValue;
            },
            [] as FlattenContentChild[]
        );

        return flattenedTree;
    } else return [];
};
