import { CircledUIBox } from "@lib/ui";

import type { ComponentProps, FC, PropsWithChildren } from "react";

type DesktopNavigationProps = ComponentProps<"nav">;

const DesktopNavigation: FC<PropsWithChildren<DesktopNavigationProps>> = ({
    children,
    ...props
}) => {
    return (
        <nav {...props}>
            <CircledUIBox
                as="ul"
                block="center"
                className="gap-3.5 font-medium text-zinc-800 dark:text-zinc-200">
                {children}
            </CircledUIBox>
        </nav>
    );
};

export default DesktopNavigation;
