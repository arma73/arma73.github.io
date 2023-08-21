"use client";

import { Container } from "@lib/ui";
import { NavItem } from "#web/components/navs";
import { siteNavs } from "#web/configs/nav";

const Footer = () => {
    return (
        <footer>
            <Container.Outer>
                <div className="border-t border-consistent pb-16 pt-10">
                    <Container.Inner>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
                                {siteNavs.map(nav => (
                                    <NavItem
                                        key={nav.path}
                                        disable={nav.disable}
                                        href={nav.path}>
                                        {nav.name}
                                    </NavItem>
                                ))}
                            </div>
                        </div>
                    </Container.Inner>
                </div>
            </Container.Outer>
        </footer>
    );
};

export default Footer;
