---
title: Create a custom route
desc: Demystifying the React Router Concept
---

As we all know, React Router is almost the official routing library in React and hardly anyone knows of any alternatives. While building some screens using a [`Query string`](https://en.wikipedia.org/wiki/Query_string) I ran into some problems, mainly how to get my object given a query string.

## Determination of volume

I had issues with the query string, but for the client-side router I needed something that would manage the URL path, manage history, and render my components according to the URL path (getting ids or parameters that make up the route) ... 
We will need soon:

- Parameter control
- Rendering the path
- Query string control
- Access to history
- Browser navigation control

Now that we have what we need to do, let's see what we want to have as the final code.

```js
const history = History();
const App = () => (
    <Router history={history}>
        <Route path="/" component={Root} />
        <Route path="/orders/:id" component={ViewOrders} />
        <Route path="/orders/:id/:operation" component={CrudOrders} />
    </Router>
);
```

The router is usually at the top level of our application, covering all the components, so we can create `<Route />` different ones. It is the `<Router />` who provides the context for our routes and is responsible for managing the rendering of each route.

To create a router, we have to follow these steps:

- Create context a [`history`](https://github.com/ReactTraining/history).
- Control all paths with received routes.
- Register the routes according to the rendering of the child routers.

The history package was used to ensure consistency across browsers.
For our context, we have:

```js
import { createBrowserHistory } from "history";
import { createContext } from "react";

export const History = createBrowserHistory();
export const HistoryContext = createContext({ ...History, params: {} });
```

Thanks to this, we can create our `<Router />` component that will provide our context for each element displayed on the screen.

```js
import { pathToRegexp } from "path-to-regexp";

// Defining types so we can work
interface MatchRoute {
    regex: RegExp;
    path: string;
    component: FC;
    params: Array<{
        name: string;
        prefix: string;
        suffix: string;
        pattern: string;
        modifier: string;
    }>;
}

interface RouterProps {
    notFound: FC;
}

interface Render {
    Component: FC<any>;
    params: { [k: string]: any };
}

export const Router: FC<RouterProps> = ({ children, notFound: NotFound }) => {
    const [location, setLocation] = useState(() => History.location);
    const [pathname, setPathName] = useState(History.location.pathname);

    /*
        This is the callback that builds our state, taking children
        and assembling the routes based on the "path" of each <Route />
    */
    const init = useCallback(() => {
        /*
            Using Children.toArray, we take all the children of our <Router /> 
            .sort (), which we do so that routes without parameters are prioritized 
            so as not to break the path regex.
        */
        const routes = Children.toArray(children).sort((a: any, b: any) => {
            const x: RouteProps = a.props;
            const y: RouteProps = b.props;
            const xHas = x.path.includes(":");
            const yHas = y.path.includes(":");

            if (!xHas || x.path === "/") return -1;
            if (yHas) return 1;
            return 0;
        });

        
        // With this map, we create each regex for the paths 
        // specified in the route components
        const rules = routes.map((x: any) => {
            const params: any[] = [];
            const regex = pathToRegexp(x.props.path, params);
            return { ...x.props, regex, params };
        });

        return { routes, rules };
    }, [children]);

    // Status initialization via function
    const controller = useMemo<{
        rules: MatchRoute[];
        routes: any[];
    }>(init, [init]);

    useEffect(() => {
        History.listen((e) => {
            setLocation(e.location);
            setPathName(e.location.pathname);
        });
    }, []);

    // A memo that will take care of rendering and obtaining the `params` 
    // given our current path In it we will make the route comparisons and 
    // define whether such a route exists or not
    const render = useMemo((): Render => {
        const params: any = {};
        // Early return to the root
        if (pathname === "/") {
            const current = controller.routes.find((x) => x.props.path === "/");
            if (current) {
                return {
                    Component: current.props.component,
                    params
                };
            }
            // Route / has not been registered and will be redirected to NotFound
            return { Component: NotFound, params };
        }

        const index = controller.rules.findIndex((x) => {
            const exec = x.regex.exec(pathName);
            // If the regex of the current route does not match, return false
            if (exec === null) return false;
            // Regex group object returned, we can capture the values 
            // in an array using the destruction, taking from item 1 onwards.
            const [, ...groups] = exec;
            // Assigning values to params
            groups.forEach((val, i) => {
                const regex = x.params[i].name;
                // a light theft to parse the values safely
                try {
                    params[regex] = JSON.parse(val);
                } catch (error) {
                    params[regex] = val;
                }
            });
            return true;
        });
        const current = controller.routes[index];
        // If my current is undefined, the route does not exist 
        // and is redirected to NotFound
        if (current === undefined) {
            return { Component: NotFound, params };
        }

        return { Component: current.props.component, params };
    }, [controller, NotFound, pathName]);

    // history props
    const historyComponent = useMemo(() => ({ ...History, location }), [
        location,
    ]);

    // Our context delivered and the router rendering only our target path component
    return (
        <HistoryContext.Provider value={{ ...History, params: render.params }}>
            <render.Component history={historyComponent} />
        </HistoryContext.Provider>
    );
};
```

And with that we have a router, but we are still missing a way to create our `<Route />`

```js
type RouteProps {
    path: string;
    component: FC;
}

export const Route = (props: RouteProps) => {
    const router = useContext(HistoryContext);
    // any is so that we can ignore and inject history props into our components
    return <props.component {...(router as any)} />
};
```

But there was also no way to create links to navigate between pages. To do this, we can create a component that uses the `<a/>` href attribute itself, so that we have an accessible and semantic way to create our links.

```js
export const Link: React.FC<A> = ({ onClick, state, href, ...props }) => {
    // the click callback that prevents the default of the element
    const click = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            onClick?.(e);
            if (!href.startsWith("http")) {
                e.preventDefault();
                return History.push(href, state);
            }
        },
        [onClick, href, state]
    );
    return <a {...props} href={href} onClick={click} />
};
```

And with that, we have all the necessary elements for the base of the router.



