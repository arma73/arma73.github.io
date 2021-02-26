import { ComponentType, FC } from "react";
import { useLocation, RouteComponentProps } from "react-router-dom";
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
import { Subtract } from "_interfaces/features/tools.interface";

export interface InjectedContentProps {
    "sections": DirectoryContentChilds[];
    "currentSection": DirectoryContentChilds | undefined;
    "pages": FlattenContentChild[];
    "location": RouteComponentProps["location"];
    "sidebarPages": Articles[];
    "headArticles": HeadArticles[];
}

const withContent = <P extends InjectedContentProps>(
    WrappedComponent: ComponentType<P>
): FC<Subtract<P, InjectedContentProps>> =>
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
                {...(props as P)}
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
