import { FC } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { RoutePage } from "_settings/path.routes";
import ContentRoutes from "./Content.routes";
import Main from "_pages/main";
import Articles from "_pages/articles";
import { DynamicImportType } from "_interfaces/dynamic.interface";

export interface ContentDynamicImport {
    "importContent": (path: string) => Promise<DynamicImportType>;
}

const SiteRoutes: FC<RouteComponentProps & ContentDynamicImport> = props => (
    <Switch>
        <Route
            exact
            strict
            path="/:url*"
            render={({ location }) => <Redirect to={`${location.pathname}/`} />}
        />
        <Route exact path={RoutePage.MAIN} component={Main} />
        <Route exact path={RoutePage.ARTICLES} component={Articles} />
        <Route>
            <ContentRoutes {...props} />
        </Route>
    </Switch>
);

export default SiteRoutes;
