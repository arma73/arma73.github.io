import { hot } from "react-hot-loader/root";
import Logo from "_components/logo";
import Container from "_components/container";

import "normalize.css";
import "_theme/main.scss";

const App = () => (
    <React.StrictMode>
        <Container>
            <Logo />
        </Container>
    </React.StrictMode>
);

export default hot(App);
