import { useState, useEffect, FC, ReactNode } from "react";

import "./Markdown.scss";

interface MarkdownProps {
    "children"?: ReactNode;
    "title"?: string;
    "pageContent": string | null;
}

const Markdown: FC<MarkdownProps> = ({
    children = null,
    title = "",
    pageContent,
}) => {
    const [render, setRender] = useState<ReactNode | null>(null);

    useEffect(() => {
        const renderElement = (
            <div
                dangerouslySetInnerHTML={{
                    "__html": pageContent || "",
                }}
            />
        );
        setRender(renderElement);
    }, [pageContent]);

    return (
        <div className="markdown">
            <h1 className="md--title">{title}</h1>
            {render}
            {children}
        </div>
    );
};

export default Markdown;
