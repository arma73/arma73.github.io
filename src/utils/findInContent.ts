import { flattenContent } from "./flattenContent";
import { Content, ContentChild } from "_src/interfaces/content.interface";

type TFindCallBack<T = unknown, R = unknown> = (
    value: T,
    index: number,
    obj: T[]
) => R;

/**
 * Find an item within the given `tree`
 */
export const findInContent = (
    tree: Content,
    test: TFindCallBack<ContentChild, boolean>
): ContentChild | undefined => flattenContent(tree).find(test);
