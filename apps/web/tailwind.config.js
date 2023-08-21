/* eslint-disable max-lines */
const { join } = require("path");
const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { fontFamily } = require("tailwindcss/defaultTheme");

const typographyList = () => ({
    ul: {},
    ol: {},
    "ul, ol": {},
    li: {},
    "li::marker": {},
    "li p": {},
    "ol > li::marker": {},
    "ul > li::marker": {},
    "li :is(ol, ul)": {},
    "li :is(li, p)": {},
});

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        join(__dirname, "app/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "components/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "content/**/*.{md,mdx}"),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        fontFamily: {
            sans: ["var(--font-display)", ...fontFamily.sans],
        },
        extend: {
            screens: {
                xs: "375px",
            },
            width: {
                article: "42.5rem", // 680px
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                consistent: {
                    // border, ring
                    DEFAULT: "hsl(var(--consistent-tone))",
                    accent: "hsl(var(--consistent-accent))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                ui: {
                    icon: "hsl(var(--ui-icon))",
                },
                button: {
                    primary: "hsl(var(--color-button-primary))",
                },
                typography: {
                    title: "hsl(var(--color-title))",
                    link: "hsl(var(--color-link))",
                    text: {
                        DEFAULT: "hsl(var(--color-text))",
                        light: "hsl(var(--color-text-light))",
                        medium: "hsl(var(--color-text-medium))",
                    },
                },
                black: {
                    DEFAULT: "#000",
                    900: "#000",
                    800: "#1a1a1a",
                    700: "#333",
                    600: "#4d4d4d",
                    500: "#666",
                    400: "#808080", // "grey"
                    300: "#999",
                    200: "#bfbfbf",
                    100: "#e6e6e6",
                },
                inline: {
                    error: "hsl(var(--text-error))",
                    warn: "hsl(var(--text-warn))",
                    info: "hsl(var(--text-info))",
                },
            },
            typography: theme => ({
                invert: {
                    css: {
                        "--tw-prose-body": "hsl(var(--color-text))",
                        "--tw-prose-headings": "hsl(var(--color-title))",
                        "--tw-prose-links": "hsl(var(--color-link))",
                        "--tw-prose-links-hover":
                            "var(--tw-prose-invert-links-hover)",
                        "--tw-prose-links-underline":
                            "var(--tw-prose-invert-links-underline)",
                        "--tw-prose-links-underline-hover":
                            "var(--tw-prose-invert-links-underline-hover)",
                        "--tw-prose-bold": "var(--tw-prose-invert-bold)",
                        "--tw-prose-counters":
                            "var(--tw-prose-invert-counters)",
                        "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
                        "--tw-prose-quote-borders":
                            "var(--tw-prose-invert-quote-borders)",
                        "--tw-prose-captions":
                            "var(--tw-prose-invert-captions)",
                        "--tw-prose-code": "var(--tw-prose-invert-code)",
                        "--tw-prose-code-bg": "var(--tw-prose-invert-code-bg)",
                        "--tw-prose-pre-border":
                            "var(--tw-prose-invert-pre-border)",
                        "--tw-prose-th-borders":
                            "var(--tw-prose-invert-th-borders)",
                        "--tw-prose-td-borders":
                            "var(--tw-prose-invert-td-borders)",
                    },
                },
                lg: {
                    css: {
                        ...typographyList(theme),
                    },
                },
                DEFAULT: {
                    css: {
                        "--tw-prose-body": "hsl(var(--color-text))",
                        "--tw-prose-headings": "hsl(var(--color-title))",
                        "--tw-prose-links": "hsl(var(--color-link))",
                        "--tw-prose-links-hover":
                            "hsl(var(--color-link-hover))",
                        "--tw-prose-links-underline":
                            "hsl(var(--color-link-underline))",
                        "--tw-prose-links-underline-hover":
                            "hsl(var(--color-link-underline-hover))",
                        "--tw-prose-bold": "hsl(var(--color-text-bold))",
                        "--tw-prose-counters": "hsl(var(--color-text))",
                        "--tw-prose-bullets": "hsl(var(--color-text-bold))",
                        "--tw-prose-quote-borders":
                            "hsl(var(--color-quote-border))",
                        "--tw-prose-captions": "hsl(var(--color-text))",
                        "--tw-prose-code": "hsl(var(--color-text-medium))",
                        "--tw-prose-code-bg": "hsl(var(--consistent-tone)/70%)",
                        "--tw-prose-pre-border": "hsl(var(--consistent-tone))",
                        "--tw-prose-th-borders":
                            "hsl(var(--consistent-accent))",
                        "--tw-prose-td-borders": "hsl(var(--consistent-tone))",

                        "--tw-prose-invert-body": "hsl(var(--color-text))",
                        "--tw-prose-invert-headings": "hsl(var(--color-title))",
                        "--tw-prose-invert-links": "hsl(var(--color-link))",
                        "--tw-prose-invert-links-hover":
                            "hsl(var(--color-link-hover))",
                        "--tw-prose-invert-underline":
                            "hsl(var(--color-link-underline))",
                        "--tw-prose-invert-underline-hover":
                            "hsl(var(--color-link-underline-hover))",
                        "--tw-prose-invert-bold": "hsl(var(--color-text-bold))",
                        "--tw-prose-invert-counters": "hsl(var(--color-text))",
                        "--tw-prose-invert-bullets":
                            "hsl(var(--color-text-bold))",
                        "--tw-prose-invert-quote-borders":
                            "hsl(var(--color-quote-border))",
                        "--tw-prose-invert-captions": "hsl(var(--color-text))",
                        "--tw-prose-invert-code":
                            "hsl(var(--color-text-medium))",
                        "--tw-prose-invert-code-bg":
                            "hsl(var(--consistent-tone)/70%)",
                        "--tw-prose-invert-pre-border":
                            "hsl(var(--consistent-tone))",
                        "--tw-prose-invert-th-borders":
                            "hsl(var(--consistent-accent))",
                        "--tw-prose-invert-td-borders":
                            "hsl(var(--consistent-tone))",

                        // Base
                        color: "var(--tw-prose-body)",
                        lineHeight: theme("lineHeight.6"),
                        "> *": {
                            marginTop: theme("spacing.10"),
                            marginBottom: theme("spacing.10"),
                        },
                        p: {
                            marginTop: theme("spacing.7"),
                            marginBottom: theme("spacing.7"),
                        },

                        // Headings
                        "h2, h3": {
                            color: "var(--tw-prose-headings)",
                            fontWeight: theme("fontWeight.semibold"),
                        },
                        h2: {
                            fontSize: theme("fontSize.xl")[0],
                            lineHeight: theme("lineHeight.7"),
                            marginTop: theme("spacing.20"),
                            marginBottom: theme("spacing.4"),
                        },
                        h3: {
                            fontSize: theme("fontSize.base")[0],
                            lineHeight: theme("lineHeight.7"),
                            marginTop: theme("spacing.16"),
                            marginBottom: theme("spacing.4"),
                        },
                        ":is(h2, h3) + *": {
                            marginTop: 0,
                        },

                        // Images
                        img: {
                            borderRadius: theme("borderRadius.3xl"),
                        },

                        // Inline elements
                        a: {
                            color: "var(--tw-prose-links)",
                            fontWeight: theme("fontWeight.semibold"),
                            textDecoration: "underline",
                            textDecorationColor:
                                "var(--tw-prose-links-underline)",
                            transitionProperty: "color, text-decoration-color",
                            transitionDuration: theme("transitionDuration.150"),
                            transitionTimingFunction: theme(
                                "transitionTimingFunction.in-out"
                            ),
                        },
                        "a:hover": {
                            color: "var(--tw-prose-links-hover)",
                            textDecorationColor:
                                "var(--tw-prose-links-underline-hover)",
                        },
                        strong: {
                            color: "var(--tw-prose-bold)",
                            fontWeight: theme("fontWeight.semibold"),
                        },
                        code: {
                            display: "inline-block",
                            color: "var(--tw-prose-code)",
                            fontSize: theme("fontSize.sm")[0],
                            fontWeight: theme("fontWeight.semibold"),
                            backgroundColor: "var(--tw-prose-code-bg)",
                            borderRadius: theme("borderRadius.lg"),
                            paddingLeft: theme("spacing.1"),
                            paddingRight: theme("spacing.1"),
                        },
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
                        },
                        "a code": {
                            color: "inherit",
                        },
                        ":is(h2, h3) code": {
                            fontWeight: theme("fontWeight.bold"),
                        },

                        // Quotes
                        blockquote: {
                            paddingLeft: theme("spacing.6"),
                            borderLeftWidth: theme("borderWidth.2"),
                            borderLeftColor: "var(--tw-prose-quote-borders)",
                            fontStyle: "italic",
                        },

                        // Figures
                        figcaption: {
                            color: "var(--tw-prose-captions)",
                            fontSize: theme("fontSize.sm")[0],
                            lineHeight: theme("lineHeight.6"),
                            marginTop: theme("spacing.3"),
                        },
                        "figcaption > p": {
                            margin: 0,
                        },

                        // Lists
                        ...typographyList(theme),

                        // Code blocks
                        pre: {
                            color: "var(--tw-prose-pre-code)",
                            fontSize: theme("fontSize.sm")[0],
                            fontWeight: theme("fontWeight.medium"),
                            backgroundColor: "var(--tw-prose-pre-bg)",
                            borderRadius: theme("borderRadius.3xl"),
                            // padding: theme('spacing.8'),
                            overflowX: "auto",
                            border: "1px solid",
                            borderColor: "var(--tw-prose-pre-border)",
                        },
                        "pre code": {
                            display: "inline",
                            color: "inherit",
                            fontSize: "inherit",
                            fontWeight: "inherit",
                            backgroundColor: "transparent",
                            borderRadius: 0,
                            padding: 0,
                        },

                        // Horizontal rules
                        hr: {
                            marginTop: theme("spacing.20"),
                            marginBottom: theme("spacing.20"),

                            // borderTopWidth: '1px',
                            // borderColor: 'var(--tw-prose-hr)',
                        },

                        // Tables
                        table: {
                            width: "100%",
                            tableLayout: "auto",
                            textAlign: "left",
                            fontSize: theme("fontSize.sm")[0],
                        },
                        thead: {
                            borderBottomWidth: "1px",
                            borderBottomColor: "var(--tw-prose-th-borders)",
                        },
                        "thead th": {
                            color: "var(--tw-prose-headings)",
                            fontWeight: theme("fontWeight.semibold"),
                            verticalAlign: "bottom",
                            paddingBottom: theme("spacing.2"),
                        },
                        "thead th:not(:first-child)": {
                            paddingLeft: theme("spacing.2"),
                        },
                        "thead th:not(:last-child)": {
                            paddingRight: theme("spacing.2"),
                        },
                        "tbody tr": {
                            borderBottomWidth: "1px",
                            borderBottomColor: "var(--tw-prose-td-borders)",
                        },
                        "tbody tr:last-child": {
                            borderBottomWidth: 0,
                        },
                        "tbody td": {
                            verticalAlign: "baseline",
                        },
                        tfoot: {
                            borderTopWidth: "1px",
                            borderTopColor: "var(--tw-prose-th-borders)",
                        },
                        "tfoot td": {
                            verticalAlign: "top",
                        },
                        ":is(tbody, tfoot) td": {
                            paddingTop: theme("spacing.2"),
                            paddingBottom: theme("spacing.2"),
                        },
                        ":is(tbody, tfoot) td:not(:first-child)": {
                            paddingLeft: theme("spacing.2"),
                        },
                        ":is(tbody, tfoot) td:not(:last-child)": {
                            paddingRight: theme("spacing.2"),
                        },
                    },
                },
            }),
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.5rem" }],
                base: ["1rem", { lineHeight: "1.75rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "2rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2rem", { lineHeight: "2.5rem" }],
                "5xl": ["3rem", { lineHeight: "3.5rem" }],
                "6xl": ["3.75rem", { lineHeight: "1" }],
                "7xl": ["4.5rem", { lineHeight: "1" }],
                "8xl": ["6rem", { lineHeight: "1" }],
                "9xl": ["8rem", { lineHeight: "1" }],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
