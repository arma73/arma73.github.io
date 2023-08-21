import { Title, Text } from "@lib/ui";
import { metaSocialGenerator } from "#web/utils";

import type { Metadata } from "next";

export const metadata: Metadata = metaSocialGenerator({
    title: "Article Post Not Found",
});

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Title className="mb-3">404</Title>
            <Title level={2}>Article Post Not Found</Title>
            <Text as="p">
                Sorry, we couldn&apos;t find the requested resource.
            </Text>
        </div>
    );
}
