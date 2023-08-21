import { Container } from "@lib/ui";
import { StyledHeader } from "#web/components/header";

import type { ReactNode } from "react";

interface IPortraitLayoutProps {
    children: ReactNode;
}

export default function PortraitLayout({ children }: IPortraitLayoutProps) {
    return (
        <div className="relative flex flex-col h-full">
            <Container>
                <div>
                    <div className="rounded-t-3xl mt-3 mb-1 bg-foreground px-3">
                        <StyledHeader />
                    </div>
                    <main className="px-6 py-6 bg-foreground">{children}</main>
                </div>
            </Container>
        </div>
    );
}
