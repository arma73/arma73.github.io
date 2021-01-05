import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Frame from "_components/frame";

const history = createBrowserHistory();

// TODO: change path to constants
const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={Frame} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
