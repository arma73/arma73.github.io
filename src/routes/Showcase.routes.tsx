import { Route, Switch } from "react-router-dom";
import { RoutePage } from "_settings/path.routes";
import { ShowAboutMe } from "_components/showcase";

const ShowcaseRoutes = () => (
    <Switch>
        <Route exact path={RoutePage.ABOUTME} component={ShowAboutMe} />
    </Switch>
);

export default ShowcaseRoutes;
