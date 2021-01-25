import { Switch, Route, Redirect } from "react-router-dom";
import { MAIN_PAGE_ROUTE } from "_settings/path.routes";
import Main from "_pages/main";

const SiteRoutes = () => (
    <Switch>
        <Route
            exact
            strict
            path="/:url*"
            render={({ location }) => <Redirect to={`${location.pathname}/`} />}
        />
        <Route exact path={MAIN_PAGE_ROUTE} component={Main} />
    </Switch>
);

export default SiteRoutes;
