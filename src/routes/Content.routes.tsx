import { FC } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import withContent, { InjectedContentProps } from "_containers/hoc/withContent";
import Container from "_components/container";
import Article from "_components/article";
// FIXME: change directory name
import PageNotFound from "_pages/error/404";
import { ContentDynamicImport } from "./Site.routes";

interface ContentRouteProps
    extends RouteComponentProps,
        ContentDynamicImport,
        InjectedContentProps {}

const ContentRoute: FC<ContentRouteProps> = ({ pages, importContent }) => {
    const mapPages = () =>
        pages.map(page => {
            const path = page.path.replace("src/content/", "");
            const content = importContent(path);

            return (
                <Route key={page.url} exact path={page.url}>
                    <Article title={page.title} content={content} />
                </Route>
            );
        });

    return (
        <Container>
            <Switch>
                {mapPages()}
                <Route path="**">
                    <PageNotFound />
                </Route>
            </Switch>
        </Container>
    );
};

export default withContent<ContentRouteProps>(ContentRoute);
