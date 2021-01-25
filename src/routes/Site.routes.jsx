import { Switch, Route, Redirect } from "react-router-dom";
import { MAIN_PAGE_ROUTE, BLOG_PAGE_ROUTE } from "_settings/path.routes";
import Main from "_pages/main";
import Blog from "_pages/blog";

const SiteRoutes = () => (
    <Switch>
        <Route
            exact
            strict
            path="/:url*"
            render={({ location }) => <Redirect to={`${location.pathname}/`} />}
        />
        <Route exact path={MAIN_PAGE_ROUTE} component={Main} />
        <Route exact path={BLOG_PAGE_ROUTE} component={Blog} />
    </Switch>
);

export default SiteRoutes;
