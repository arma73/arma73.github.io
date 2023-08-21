import Link from "next/link";
import clsx from "clsx";
import { LogoIcon } from "#web/components/icons";
import { SiteLinks } from "#web/configs/site";

import type { FC, AnchorHTMLAttributes } from "react";
import type { LinkProps } from "next/link";

interface ILogoLinkProps
    extends Omit<
            AnchorHTMLAttributes<HTMLAnchorElement>,
            keyof Omit<LinkProps, "href">
        >,
        Omit<LinkProps, "href"> {
    className?: string;
}

const LogoLink: FC<ILogoLinkProps> = ({ className, ...props }) => {
    return (
        <Link
            href={SiteLinks.PUBLIC_URL}
            aria-label="Home"
            className={clsx(className, "pointer-events-auto")}
            {...props}>
            <LogoIcon
                className={clsx(
                    "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-[90%] h-[90%] m-auto"
                )}
            />
        </Link>
    );
};

export default LogoLink;
