import { hot } from "react-hot-loader/root";
import Banner from "_components/logo";

import "normalize.css";
import "_theme/main.scss";

const App = () => (
    <React.StrictMode>
        <Banner />
    </React.StrictMode>
);

export default hot(App);
