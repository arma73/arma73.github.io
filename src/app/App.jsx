import { hot } from "react-hot-loader/root";
import Splash from "_components/splash";

import "normalize.css";
import "_theme/main.scss";

const App = () => (
    <React.StrictMode>
        <Splash />
    </React.StrictMode>
);

export default hot(App);
