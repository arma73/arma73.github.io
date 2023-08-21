"use client";

import { Container, AvatarBox } from "@lib/ui";
import {
    DesktopNavigation,
    NavItemList,
    MobileNavigation,
} from "#web/components/navs";
import ModeToggle from "#web/components/theme/ModeToggle";
import { LogoLink } from "#web/components/links";
import AvailableDialog from "./AvailableDialog";
import { useScrollEffects } from "#web/hooks";

import type { CSSProperties } from "react";

const Header = () => {
    const { headerRef } = useScrollEffects();

    return (
        <header
            className="pointer-events-none relative z-50 flex flex-col"
            style={{
                height: "var(--header-height)",
                marginBottom: "var(--header-mb)",
            }}>
            <div
                ref={headerRef}
                className="top-0 z-10 h-16 pt-6"
                style={{
                    position:
                        "var(--header-position)" as CSSProperties["position"],
                }}>
                <Container
                    className="top-[var(--header-top,theme(spacing.6))] w-full"
                    style={{
                        position:
                            "var(--header-inner-position)" as CSSProperties["position"],
                    }}>
                    <div className="relative flex gap-4">
                        <div className="flex flex-1">
                            <AvatarBox>
                                <LogoLink />
                            </AvatarBox>
                        </div>
                        <div className="flex flex-1 justify-end md:justify-center">
                            <MobileNavigation className="pointer-events-auto md:hidden" />
                            <DesktopNavigation className="pointer-events-auto hidden md:block">
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
                </Container>
            </div>
        </header>
    );
};

export default Header;
