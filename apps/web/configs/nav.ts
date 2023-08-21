import { SiteLinks } from "./site";

export interface ISiteNavigation {
    name: string;
    path: SiteLinks;
    disable?: boolean;
}

export type ISiteNavigations = Array<ISiteNavigation>;

export const siteNavs: ISiteNavigations = [
    {
        name: "Articles",
        path: SiteLinks.ARTICLES,
    },
    {
        name: "Study",
        path: SiteLinks.STUDY,
        disable: true,
    },
    {
        name: "Newsletter",
        path: SiteLinks.NEWS,
        disable: true,
    },
    {
        name: "Board",
        path: SiteLinks.BOARD,
        disable: true,
    },
    {
        name: "Journey",
        path: SiteLinks.JOURNEY,
        disable: true,
    },
];
