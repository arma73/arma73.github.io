import Link from "next/link";
import clsx from "clsx";

import type { HTMLAttributes, FC } from "react";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    href?: string;
    disabled?: boolean;
}

const Card: FC<ICardProps> = ({
    href,
    className,
    children,
    disabled,
    ...props
}) => {
    return (
        <div
            className={clsx(
                "group relative rounded-lg  p-6 shadow-md transition-shadow hover:shadow-lg",
                "border border-consistent bg-white dark:bg-zinc-900/70",
                disabled && "cursor-not-allowed opacity-60",
                className
            )}
            {...props}>
            <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-typography-text-medium">
                    {children}
                </div>
            </div>
            {href && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link href={disabled ? "#" : href} className="absolute inset-0">
                    <span className="sr-only">View</span>
                </Link>
            )}
        </div>
    );
};

export default Card;
