import Container from "_components/container";
import Logo from "_components/logo";
import Navigation from "_components/navigation";

import "./Header.scss";

const Header = () => (
    <header className="header">
        <Container className="header--inner">
            <Logo theme="light" />
            <Navigation />
        </Container>
    </header>
);

export default Header;
