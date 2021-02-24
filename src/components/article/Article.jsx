import { useState, useEffect } from "react";
import Markdown from "_components/markdown";
import { PlaceholderString } from "_components/placeholder";

import "./Article.scss";

const Article = ({ content, title }) => {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        const isDynamicContent = content instanceof Promise;
        const contentValue = isDynamicContent
            ? PlaceholderString()
            : content.default || content;
        setPageContent(contentValue);
    }, [content]);

    useEffect(() => {
        if (content instanceof Promise) {
            content
                .then(module => {
                    setPageContent(module.default || module);
                })
                .catch(() => {
                    setPageContent("Error loading content.");
                });
        }
    }, [content]);

    return (
        <main className="article">
            <Markdown title={title} pageContent={pageContent} />
        </main>
    );
};

export default Article;
