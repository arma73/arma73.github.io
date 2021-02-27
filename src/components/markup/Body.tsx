import { Route } from "react-router-dom";
import SiteRoutes from "_routes/Site.routes";
import { PUBLIC_URL } from "_settings/path.routes";
import { ROOT_DOM_ID } from "_settings/constants";

const Body = () => (
    <body>
        <div id={ROOT_DOM_ID}>
            <Route
                path={PUBLIC_URL}
                render={props => (
                    <SiteRoutes
                        {...props}
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        importContent={path => require(`../../content/${path}`)}
                    />
                )}
            />
        </div>
    </body>
);

export default Body;
