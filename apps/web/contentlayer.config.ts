/* eslint-disable max-lines */
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { ComputedFields } from "contentlayer/source-files";
import type { LineElement } from "rehype-pretty-code";

const computedFields: ComputedFields = {
    slug: {
        type: "string",
        resolve: doc => `${doc._raw.flattenedPath}`,
    },
    path: {
        type: "string",
        resolve: doc => doc._raw.flattenedPath,
    },
    slugAsParams: {
        type: "string",
        resolve: doc => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

const Article = defineDocumentType(() => ({
    name: "Article",
    filePathPattern: `articles/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the article",
            required: true,
        },
        description: {
            type: "string",
        },
        published: {
            type: "boolean",
            default: true,
        },
        lastmod: { type: "date" },
        favorite: {
            type: "boolean",
            default: false,
        },
        draft: {
            type: "boolean",
            default: false,
        },
        image: {
            type: "string",
            required: true,
        },
        date: {
            type: "date",
            description: "The date of the article",
            required: true,
        },
        authors: {
            type: "list",
            of: { type: "string" },
            required: true,
        },
        sources: {
            type: "list",
            of: { type: "string" },
        },
        inspiration: {
            type: "list",
            of: { type: "string" },
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Article],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug, // rehype plugin to add ids to headings.
            [
                rehypePrettyCode,
                {
                    theme: {
                        dark: "github-dark",
                        light: "github-light",
                    },
                    onVisitLine(node: LineElement) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
});
