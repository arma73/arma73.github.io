/* eslint-disable max-lines */
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { allArticles } from "contentlayer/generated";
import Mdx from "#web/components/mdx";
import { formatDate } from "#web/utils";
import allAuthors from "#web/collections/authors.json";
import { Container, Title } from "@lib/ui";
import { siteConfig } from "#web/configs/site";
import { metaSocialGenerator } from "#web/utils";

import "#web/styles/mdx.css";
import type { Metadata } from "next";

async function getArticleFromParams(
    params: Partial<IArticlePageProps["params"]>
) {
    const slug = params?.slug?.join("/");
    const article = allArticles.find(
        _article => _article.slugAsParams === slug
    );

    if (!article) {
        return null;
    }

    return article;
}

export async function generateStaticParams(): Promise<
    Array<IArticlePageProps["params"]>
> {
    return allArticles.map(article => ({
        slug: article.slugAsParams.split("/"),
    }));
}

export async function generateMetadata({
    params,
}: IArticlePageProps): Promise<Metadata> {
    const post = await getArticleFromParams(params);

    if (!post) {
        return metaSocialGenerator({
            title: "Article Post Not Found",
        });
    }

    const url = process.env.HOST;
    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set("heading", post.title);
    ogUrl.searchParams.set("type", "Article Post");

    return {
        title: post.title,
        description: post.description,
        authors: post.authors.map(author => ({
            name: author,
        })),
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: `${siteConfig.url}/${post.slug}`,
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [ogUrl.toString()],
        },
    };
}

interface IArticlePageProps {
    params: {
        slug: Array<string>;
    };
}

export default async function ArticlePage({ params }: IArticlePageProps) {
    const article = await getArticleFromParams(params);

    if (!article) {
        notFound();
    }

    const authors = article.authors.map(author =>
        allAuthors.find(({ username }) => username === author)
    );

    return (
        <Container>
            <article className="mx-auto lg:w-article">
                <div>
                    {article.date && (
                        <time
                            dateTime={article.date}
                            className="block text-sm text-typography-text-light">
                            Published on {formatDate(article.date)}
                        </time>
                    )}
                    <Title>{article.title}</Title>
                    {authors?.length ? (
                        <div className="mt-4 flex space-x-4">
                            {authors.map(author =>
                                author ? (
                                    <Link
                                        key={author.username}
                                        target="_blank"
                                        href={`https://twitter.com/${author.twitter}`}
                                        className="flex items-center space-x-2 text-sm">
                                        <div className="w-8 h-8 md:w-10 md:h-10 relative">
                                            <Image
                                                src={author.avatar}
                                                alt={`Picture of the ${author.username}`}
                                                fill
                                                className="rounded-full dark:opacity-90"
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <div className="flex-1 text-left leading-tight">
                                            <p className="font-medium text-typography-text-medium">
                                                {author.username}
                                            </p>
                                            <p className="text-xs text-typography-text-light">
                                                @{author.twitter}
                                            </p>
                                        </div>
                                    </Link>
                                ) : null
                            )}
                        </div>
                    ) : null}
                </div>
                {article.image && (
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={720}
                        height={405}
                        className="my-8 rounded-md border border-consistent dark:opacity-90 bg-slate-200 transition-colors group-hover:border-consistent-accent"
                        priority
                    />
                )}
                <Mdx code={article.body.code} />
            </article>
        </Container>
    );
}
