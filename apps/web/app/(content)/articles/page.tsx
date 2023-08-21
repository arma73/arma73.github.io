import { allArticles } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { metaSocialGenerator } from "#web/utils";
import { Container, Title, Text } from "@lib/ui";
import { ArticleCard } from "#web/components/cards";

import type { Metadata } from "next";

export const metadata: Metadata = metaSocialGenerator({
    title: "Articles",
    desc: "Useful articles about JavaScript, TypeScript, React, Node, Testing, DB and more.",
});

export default async function ArticlesPage() {
    const articles = allArticles
        .filter(article => article.published)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date));
        });

    return (
        <Container>
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <Title> Articles </Title>
                    <Text as="p" vtype="desc">
                        An article built using Contentlayer. Articles are
                        written in MDX.
                    </Text>
                </div>
            </div>
            <hr className="my-8" />
            {articles?.length ? (
                <div className="grid gap-10 sm:grid-cols-2">
                    {articles.map((article, idx) => (
                        <ArticleCard key={idx} priority={idx} {...article} />
                    ))}
                </div>
            ) : (
                <p>There are no published articles yet.</p>
            )}
        </Container>
    );
}
