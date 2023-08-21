import NextLink from "next/link";
import clsx from "clsx";

import type { FC } from "react";

export interface IExploreMoreProps {
    className?: string;
    label: string;
    target?: "_blank";
    variant?: keyof typeof textClasses;
    href: string;
}

const textClasses = {
    default: "text-lg",
    heading: "text-2xl",
    sm: "text-sm",
};

const ArrowLink: FC<IExploreMoreProps> = ({
    className,
    href = "#",
    variant = "default",
    target,
    label,
}) => {
    return (
        <NextLink
            className={clsx(
                "group font-semibold transition-colors",
                textClasses[variant],
                className
            )}
            target={target}
            href={href}>
            <span className="pointer-events-none mr-1">{label}</span>
            <span className="pointer-events-none inline-block transition-transform group-hover:translate-x-1">
                &rarr;
            </span>
        </NextLink>
    );
};

export default ArrowLink;
