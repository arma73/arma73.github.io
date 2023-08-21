import { ArrowLink } from "#web/components/links";
import { Caterpillar } from "#web/components/fragments/banners";
import { ArticleIcon } from "#web/components/icons";
import { BriefResume } from "#web/components/fragments/banners";
import { Newsletter } from "#web/components/fragments/widgets";
import { ArticleCard } from "#web/components/cards";
import { SiteLinks } from "#web/configs/site";
import { compareDesc } from "date-fns";
import { Panel, Title, Text } from "@lib/ui";
import { allArticles } from "contentlayer/generated";
import { metaSocialGenerator } from "#web/utils";
import SocialLinks from "./SocialLinks";

import type { Metadata } from "next";

export const metadata: Metadata = metaSocialGenerator({
    title: "Portfolio",
    desc: "Passionate Full Stack developer, creating web apps that solve problems and inspire users. Explore Arman's portfolio.",
});

async function IndexPage() {
    const favArticles = allArticles
        .filter(article => article.favorite && article.published)
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <>
            <div className="mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2">
                <div className="w-full">
                    <Title>Passionate Full Stack Developer.</Title>
                    <Text as="p" vtype="desc" className="mt-6">
                        I&apos;m Arman, an enthusiastic Full Stack developer
                        based in Yerevan, Armenia. My expertise lies in crafting
                        web applications that not only address practical
                        challenges but also ignite inspiration among users.
                    </Text>
                    <SocialLinks />
                </div>
                <div className="w-full relative h-80 lg:h-auto mt-10 md:mt-14 lg:mt-0">
                    <Caterpillar />
                </div>
            </div>
            <div className="mt-10 md:mt-20">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
                    <Panel vsize="md" vtype="bordered">
                        <div className="mb-6 flex justify-between items-center">
                            <div className="flex items-center">
                                <ArticleIcon className="h-6 w-6 flex-none" />
                                <Title level={2} vsize={5} className="ml-3">
                                    Favorite articles
                                </Title>
                            </div>
                            <ArrowLink
                                href={SiteLinks.ARTICLES}
                                label="more"
                                variant="sm"
                                className="text-typography-text-light/60 hover:text-typography-text-medium active:text-zinc-600 dark:active:text-zinc-50"
                            />
                        </div>
                        <div className="flex flex-col gap-10">
                            {favArticles?.length ? (
                                favArticles.map((article, idx) => (
                                    <ArticleCard
                                        key={idx}
                                        priority={idx}
                                        {...article}
                                    />
                                ))
                            ) : (
                                <p className="mx-auto">
                                    There are no published articles yet.
                                </p>
                            )}
                        </div>
                    </Panel>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        <Newsletter />
                        <BriefResume />
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
