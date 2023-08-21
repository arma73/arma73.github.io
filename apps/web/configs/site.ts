import site from "#web/collections/site.json" assert { type: "json" };

export interface ISiteConfig {
    name: string;
    url: string;
    ogImage: string;
    description: string;
    language: string;
    email: string;
    keywords?: string | Array<string>;
    twitter: {
        card: string;
        images: string;
        creator: string;
        site: string;
        description: string;
    };
}

export const enum SiteLinks {
    PUBLIC_URL = "/",
    ARTICLES = "/articles",
    STUDY = "/study",
    NEWS = "/news",
    BOARD = "/board",
    JOURNEY = "/journey",
    RSS = "/feed.xml",
}

export const enum SiteSocialLinks {
    TWITTER = "https://twitter.com/_arma73",
    GITHUB = "https://github.com/arma73",
    LINKEDIN = "https://www.linkedin.com/in/arman-khilko/",
    NPM = "https://www.npmjs.com/~amollo",
}

export const siteConfig: ISiteConfig = {
    name: site.name,
    description: site.description,
    language: site.language,
    ogImage: "/social/og.png",
    email: site.email,
    url: process.env.HOST ?? site.urlOrigin,
    twitter: {
        card: "summary_large_image",
        images: "/social/og.png",
        creator: "@_arma73",
        site: "@_arma73",
        description: site.description,
    },
};
