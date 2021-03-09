import { useState, useEffect, FC } from "react";
import Markdown from "_components/markdown";
import { PlaceholderString } from "_components/placeholder";
import { DynamicImportType } from "_interfaces/dynamic.interface";

import "./Article.scss";

interface ArticleProps {
    "content": DynamicImportType<string>;
    "title"?: string;
}

const Article: FC<ArticleProps> = ({ content, title = "" }) => {
    const [pageContent, setPageContent] = useState<string | null>(null);

    useEffect(() => {
        let contentValue: string | null = null;

        if (content instanceof Promise) {
            contentValue = PlaceholderString();
        }

        setPageContent(contentValue);
    }, [content]);

    useEffect(() => {
        async function setContent() {
            try {
                const contentData = await content;
                setPageContent(contentData.default);
            } catch {
                setPageContent("Error loading content.");
            }
        }

        if (content instanceof Promise) {
            setContent();
        }
    }, [content]);

    return (
        <div className="article">
            <Markdown title={title} pageContent={pageContent} />
        </div>
    );
};

export default Article;
