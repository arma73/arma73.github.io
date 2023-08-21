import { writeFileSync } from "fs";
import { compareDesc } from "date-fns";
import { escape } from "./htmlEscaper.mjs";
import { allArticles } from "../.contentlayer/generated/index.mjs";
import site from "../collections/site.json" assert { type: "json" };

const siteConfig = {
    name: site.name,
    description: site.description,
    language: site.language,
    email: site.email,
    url: process.env.HOST ?? site.urlOrigin,
};

const generateChannelItem = (config, post) => `
    <item>
      <guid isPermaLink="true">${config.url}/${post.slug}</guid>
      <title>${escape(post.title)}</title>
      <link>${config.url}/${post.slug}</link>
      ${
          post.description &&
          `<description>${escape(post.description)}</description>`
      }
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${config.email} (${config.name})</author>
    </item>`;

const generateXML = (
    config,
    posts,
    page = "feed.xml"
) => `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(config.name)}</title>
    <link>${config.url}/articles</link>
    <description>${escape(config.description)}</description>
    <language>${config.language}</language>
    <managingEditor>${config.email} (${config.name})</managingEditor>
    <webMaster>${config.email} (${config.name})</webMaster>
    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
    <image>
      <url>${config.url}/medium_logo-192x192.png</url>
      <title>${escape(config.name)}</title>
      <link>${config.url}</link>
    </image>
    <atom:link href="${
        config.url
    }/${page}" rel="self" type="application/rss+xml"/>
    ${posts.map(post => generateChannelItem(config, post)).join("")}
  </channel>
</rss>
`;

async function generateRSS(config, allArticles, page = "feed.xml") {
    const publishPosts = allArticles
        .filter(post => post.draft !== true)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date));
        });

    // RSS for article posts
    if (publishPosts.length > 0) {
        const rss = generateXML(config, publishPosts);
        writeFileSync(`./public/${page}`, rss);
        // eslint-disable-next-line no-console
        console.info("✅ Created an RSS feed for article posts");
    }
}

generateRSS(siteConfig, allArticles);
