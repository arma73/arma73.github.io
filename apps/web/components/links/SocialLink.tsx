import Link from "next/link";
import clsx from "clsx";

import type { FC, AnchorHTMLAttributes } from "react";
import type { LinkProps } from "next/link";
import type { IconProps } from "../icons/_types";

interface ISocialLinkProps
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
        LinkProps {
    icon: FC<IconProps>;
    className?: string;
    size?: "md" | "sm";
}

const SocialLink: FC<ISocialLinkProps> = ({
    icon: Icon,
    size = "md",
    ...props
}) => {
    return (
        <Link target="_blank" className="group -m-1 p-1" {...props}>
            <Icon
                className={clsx(
                    "fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300",
                    {
                        "h-6 w-6": size === "md",
                        "h-5 w-5": size === "sm",
                    }
                )}
            />
        </Link>
    );
};

export default SocialLink;
