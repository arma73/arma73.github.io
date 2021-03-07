import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PUBLIC_URL } from "_settings/path.routes";
import Navigation from "_components/navigation";
import SiteRoutes from "./Site.routes";

const Routes = () => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            // This fires when the service worker controlling this page
            // changes, eg a new worker has skipped waiting and become
            // the new active worker.
            navigator.serviceWorker.addEventListener("controllerchange", () => {
                window.location.reload();
            });
        }
    }, []);

    return (
        <BrowserRouter>
            <Navigation />
            <Route
                path={PUBLIC_URL}
                render={props => (
                    <SiteRoutes
                        {...props}
                        importContent={path => import(`../content/${path}`)}
                    />
                )}
            />
        </BrowserRouter>
    );
};
export default Routes;
