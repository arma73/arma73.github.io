import Container from "_components/container";
import Logo from "_components/logo";
import Navigation from "_components/navigation";

import "./Banner.scss";

// TODO: change Banner name later
const Banner = () => (
    <header className="banner">
        <Container className="banner--inner">
            <Logo theme="light" />
            <Navigation />
        </Container>
    </header>
);

export default Banner;
