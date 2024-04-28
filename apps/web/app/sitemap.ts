import type { MetadataRoute } from "next";
import { siteConfig } from "#web/configs/site";
import { allArticles } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = siteConfig.url;
    const articleRoutes = allArticles.map(article => ({
        url: `${siteUrl}/${article.slug}`,
        lastModified: article.lastmod || article.date,
    }));

    const routes = ["", "articles"].map(route => ({
        url: `${siteUrl}/${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...articleRoutes];
}
