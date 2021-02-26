import { ComponentType, FC } from "react";
import { useLocation } from "react-router-dom";
import {
    extractSections,
    extractCurrentSection,
    extractPages,
    extractHeadArticles,
} from "_utils/extract";
import { _strip } from "_utils/_strip";
import content from "_settings/_content";
import {
    ContentChild,
    DirectoryContentChilds,
    FlattenContentChild,
} from "_src/interfaces/content.interface";
import { Articles, HeadArticles } from "_interfaces/articles.interface";

const withContent = <P extends ObjectOf<P>>(
    WrappedComponent: ComponentType<P>
): FC<P> =>
    function ProvideContent(props) {
        const location = useLocation();
        const sections: DirectoryContentChilds[] = extractSections(content);
        const currentSection:
            | DirectoryContentChilds
            | undefined = extractCurrentSection(sections, location.pathname);
        const pages: FlattenContentChild[] = extractPages(content);
        const articlItems: ContentChild[] | undefined = currentSection
            ? currentSection.children
            : content.children.filter(
                  item => item.type !== "directory" && item.url !== "/"
              );
        let sidebarPages: Articles[] = [];
        let headArticles: HeadArticles[] = [];

        if (articlItems) {
            sidebarPages = _strip(articlItems);
            headArticles = extractHeadArticles(sidebarPages);
        }

        return (
            <WrappedComponent
                {...props}
                sections={sections}
                currentSection={currentSection}
                pages={pages}
                location={location}
                sidebarPages={sidebarPages}
                headArticles={headArticles}
            />
        );
    };

export default withContent;
