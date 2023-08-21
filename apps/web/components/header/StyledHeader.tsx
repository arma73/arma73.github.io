"use client";

import { AvatarBox } from "@lib/ui";
import {
    DesktopNavigation,
    NavItemList,
    MobileNavigation,
} from "#web/components/navs";
import ModeToggle from "#web/components/theme/ModeToggle";
import { LogoLink } from "#web/components/links";
import AvailableDialog from "./AvailableDialog";

const StyledHeader = () => {
    return (
        <header className="pointer-events-none relative z-50 flex flex-col">
            <div className="top-0 z-10 h-16 pt-3">
                <div className="w-full">
                    <div className="relative flex gap-4">
                        <div className="flex flex-1">
                            <MobileNavigation className="pointer-events-auto md:hidden" />
                            <DesktopNavigation className="pointer-events-auto hidden md:block">
                                <li>
                                    <AvatarBox size="sm" className="m-auto">
                                        <LogoLink />
                                    </AvatarBox>
                                </li>
                                <NavItemList />
                            </DesktopNavigation>
                        </div>
                        <div className="flex justify-end md:flex-1">
                            <div className="pointer-events-auto h-10 flex gap-4">
                                <ModeToggle />
                                <AvailableDialog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default StyledHeader;
