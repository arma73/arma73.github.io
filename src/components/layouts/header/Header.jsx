import Container from "_components/container";
import Logo from "_components/logo";
import Navigation from "_components/navigation";

import "./Header.scss";

const Header = ({ theme = "light" }) => (
    <header className={`header header--${theme}`}>
        <Container className="header--inner">
            <Logo theme={theme} />
            <Navigation theme={theme} />
        </Container>
    </header>
);

export default Header;
