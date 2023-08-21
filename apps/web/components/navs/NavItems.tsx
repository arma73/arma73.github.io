import { forwardRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { siteNavs } from "#web/configs/nav";
import { UnderConstructionHoverCard } from "../cards";

import type { PropsWithChildren } from "react";

interface INavItemProps {
    href: string;
    disable?: boolean;
}

export const NavItem = forwardRef<
    HTMLLIElement,
    PropsWithChildren<INavItemProps>
>(function NavItemRef({ href, disable = false, children }, externalRef) {
    const pathname = usePathname();
    const isActive = pathname === href;

    if (disable) {
        return (
            <UnderConstructionHoverCard>
                <li className={clsx("list-none opacity-50")} ref={externalRef}>
                    <span
                        className={
                            "relative block py-2 transition text-sm font-medium text-typography-text-medium cursor-not-allowed"
                        }>
                        {children}
                    </span>
                </li>
            </UnderConstructionHoverCard>
        );
    }

    return (
        <li
            className={clsx("list-none", {
                "opacity-50 cursor-not-allowed pointer-events-none": disable,
            })}
            ref={externalRef}>
            <Link
                href={href}
                className={clsx(
                    "relative block py-2 transition text-sm font-medium",
                    isActive
                        ? "text-primary"
                        : "text-typography-text-medium hover:text-primary"
                )}>
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 dark:from-primary/0 dark:via-primary/40 dark:to-primary/0" />
                )}
            </Link>
        </li>
    );
});

const NavItemList = () => {
    return (
        <>
            {siteNavs.map(nav => (
                <NavItem key={nav.path} disable={nav.disable} href={nav.path}>
                    {nav.name}
                </NavItem>
            ))}
        </>
    );
};

export default NavItemList;
