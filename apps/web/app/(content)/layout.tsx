import Header from "#web/components/header";
import Footer from "#web/components/footer";

import type { ReactNode } from "react";

interface IContentLayoutProps {
    children: ReactNode;
}

export default function ContentLayout({ children }: IContentLayoutProps) {
    return (
        <>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-foreground/10 ring-1 ring-consistent" />
                </div>
            </div>
            <div className="relative flex flex-col h-full justify-between">
                <div>
                    <Header />
                    <main className="my-9">{children}</main>
                </div>
                <Footer />
            </div>
        </>
    );
}
