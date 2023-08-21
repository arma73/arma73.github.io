import Link from "next/link";
import Image from "next/image";
import { formatDate } from "#web/utils";
import { Title } from "@lib/ui";

import type { Article } from "contentlayer/generated";

const ArticleCard = (post: Article & { priority: number }) => {
    return (
        <article
            key={post._id}
            className="group relative flex flex-col space-y-2">
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border border-consistent dark:opacity-90 group-hover:border-consistent-accent transition-colors"
                    priority={post.priority <= 1}
                />
            )}

            {post.date && (
                <time
                    className="text-xs text-typography-text-light"
                    dateTime={post.date}>
                    {formatDate(post.date)}
                </time>
            )}
            <Title level={3} vsize={2}>
                {post.title}
            </Title>
            {post.description && (
                <p className="text-base font-normal text-typography-text-light leading-6">
                    {post.description}
                </p>
            )}

            <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
            </Link>
        </article>
    );
};

export default ArticleCard;
