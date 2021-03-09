import { FC } from "react";
import {
    Switch,
    Route,
    Redirect,
    RouteComponentProps,
    useLocation,
} from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { RoutePage } from "_settings/path.routes";
import ContentRoutes from "./Content.routes";
import Main from "_pages/main";
import PageAboutMe from "_pages/aboutme";
import ShowcaseRoutes from "./Showcase.routes";
import Experience from "_pages/experience";
import Articles from "_pages/articles";
import { DynamicImportType } from "_interfaces/dynamic.interface";

export interface ContentDynamicImport {
    "importContent": (path: string) => DynamicImportType<string>;
}

const SiteRoutes: FC<RouteComponentProps & ContentDynamicImport> = props => {
    const location = useLocation();
    const showcase = location.state && location.state.showcase;

    return (
        <MDXProvider components={{}}>
            <Switch location={showcase || location}>
                <Route
                    exact
                    strict
                    path="/:url*"
                    render={({ location }) => (
                        <Redirect to={`${location.pathname}/`} />
                    )}
                />
                <Route exact path={RoutePage.MAIN} component={Main} />
                <Route exact path={RoutePage.ARTICLES} component={Articles} />
                <Route exact path={RoutePage.ABOUTME} component={PageAboutMe} />
                <Route
                    exact
                    path={RoutePage.EXPERIENCE}
                    component={Experience}
                />
                <Route render={() => <ContentRoutes {...props} />} />
            </Switch>
            {showcase && <ShowcaseRoutes />}
        </MDXProvider>
    );
};

export default SiteRoutes;
