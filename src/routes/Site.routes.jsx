import { Switch, Route, Redirect } from "react-router-dom";
import Main from "_pages/main";

const SiteRoutes = () => (
    <Switch>
        <Route
            exact
            strict
            path="/:url*"
            render={({ location }) => <Redirect to={`${location.pathname}/`} />}
        />
        <Route exact path="/" component={Main} />
    </Switch>
);

export default SiteRoutes;
