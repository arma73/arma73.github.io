import { hot } from "react-hot-loader/root";
import Routes from "_routes/Routes";
import { MediaProvider } from "_context";

import "normalize.css";
import "_theme/main.scss";

const App = () => (
    <React.StrictMode>
        <MediaProvider>
            <Routes />
        </MediaProvider>
    </React.StrictMode>
);

export default hot(App);
