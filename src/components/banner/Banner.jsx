import Container from "_components/container";
import Logo from "_components/logo";

import "./Banner.scss";

// TODO: change Banner later
const Banner = () => (
    <header className="banner">
        <Container className="banner-inner">
            <Logo theme="light" />
        </Container>
    </header>
);

export default Banner;
