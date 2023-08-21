"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import { ClockFilledIcon, RSSIcon } from "../icons";
import { Title } from "@lib/ui";
import { SiteLinks } from "#web/configs/site";
import Link from "next/link";
import clsx from "clsx";
import { Panel } from "@lib/ui";

import type { FC, PropsWithChildren } from "react";

const UnderConstructionHoverCard: FC<PropsWithChildren> = ({ children }) => {
    return (
        <HoverCard.Root openDelay={400}>
            <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content
                    className={clsx(
                        "hidden md:block",
                        "data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all",
                        "bg-background ring-1 ring-consistent",
                        "w-72 rounded-md p-5"
                    )}
                    sideOffset={5}>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <ClockFilledIcon className="block h-14 w-14 rounded-full " />
                            <Title
                                level={4}
                                className="ml-3 text-typography-text-medium">
                                Under Construction
                            </Title>
                        </div>
                        <Panel vsize={"sm"}>
                            <Link
                                href={SiteLinks.RSS}
                                target="_blank"
                                className="group flex items-center">
                                <RSSIcon className="w-8 h-8 fill-ui-icon group-hover:fill-ui-icon/50" />
                                <span className="ml-3 text-sm leading-5 text-typography-text-light group-hover:text-typography-text-light/50">
                                    Subscribe to RSS feed to stay up to date
                                </span>
                            </Link>
                        </Panel>
                    </div>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
};

export default UnderConstructionHoverCard;
