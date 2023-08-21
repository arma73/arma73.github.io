import { Popover } from "@headlessui/react";
import { NavItem } from "./NavItems";

import type { FC, PropsWithChildren } from "react";

interface IMobileNavItemProps {
    href: string;
    disable?: boolean;
}

const MobileNavItem: FC<PropsWithChildren<IMobileNavItemProps>> = ({
    href,
    disable = false,
    children,
}) => {
    return (
        <Popover.Button as={NavItem} href={href} disable={disable}>
            {children}
        </Popover.Button>
    );
};

export default MobileNavItem;
