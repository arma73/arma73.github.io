import { Switch, Route, Redirect } from "react-router-dom";
import { MAIN_PAGE_ROUTE, ARTICLES_PAGE_ROUTE } from "_settings/path.routes";
import ContentRoutes from "./Content.routes";
import Main from "_pages/main";
import Articles from "_pages/articles";

const SiteRoutes = props => (
    <Switch>
        <Route
            exact
            strict
            path="/:url*"
            render={({ location }) => <Redirect to={`${location.pathname}/`} />}
        />
        <Route exact path={MAIN_PAGE_ROUTE} component={Main} />
        <Route exact path={ARTICLES_PAGE_ROUTE} component={Articles} />
        <Route render={() => <ContentRoutes {...props} />} />
    </Switch>
);

export default SiteRoutes;
