import { BrowserRouter, Route, Switch } from "react-router-dom";

import Frame from "_components/frame";
import Splash from "_pages/splash";
import Guides from "_pages/guides";
import Reference from "_pages/reference";
import Contribute from "_pages/contribute";
import Analyze from "_pages/analyze";
import Donate from "_pages/donate";
import PageNotFound from "_pages/error/404";

// TODO: change path to constants
const Routes = () => (
    <BrowserRouter>
        <Frame>
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/guides" component={Guides} />
                <Route exact path="/reference" component={Reference} />
                <Route exact path="/contribute" component={Contribute} />
                <Route exact path="/analyze" component={Analyze} />
                <Route exact path="/donate" component={Donate} />
                <Route exact path="**" component={PageNotFound} />
            </Switch>
        </Frame>
    </BrowserRouter>
);

export default Routes;
