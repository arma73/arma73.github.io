import { Title, AvatarBox, Text } from "@lib/ui";
import { LogoLink } from "#web/components/links";
import { metaSocialGenerator } from "#web/utils";

import type { Metadata } from "next";

/** @see https://github.com/vercel/next.js/issues/45620 */
export const metadata: Metadata = metaSocialGenerator({
    title: "Not Found",
});

/**
 * Navigating within the not-found.tsx page to the same subroute does not work
 * @see https://github.com/vercel/next.js/issues/49823
 */
export default function NotFound() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <AvatarBox className="mb-3" size="lg">
                <LogoLink />
            </AvatarBox>
            <Title>404</Title>
            <Title level={2}>Not Found</Title>
            <Text as="p">
                Sorry, we couldn&apos;t find the requested resource.
            </Text>
        </main>
    );
}
