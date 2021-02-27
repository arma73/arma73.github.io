/**
 * As github pages uses trailing slash, we need to provide it
 * to canonicals for consistency between canonical href and
 * final url served by github pages.
 */
export const enforceTrailingSlash = (url: string): string =>
    url.replace(/\/?$/, "/");
