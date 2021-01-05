import { Link } from "react-router-dom";
import Icon from "_components/icon";
import Container from "_components/container";

import "./Footer.scss";

const Footer = () => (
    <footer className="footer">
        <Container className="footer--inner">
            <section className="footer--inner-left">
                <Link className="footer__link--inner" to="/license">License</Link>
                <a className="footer__link--inner" href="https://github.com/arma73/amollo/graphs/contributors">
                    Contributors
                </a>
                <a className="footer__link--inner" href="https://github.com/arma73/amollo/issues">
                    Issues
                </a>
            </section>

            <section className="footer--inner-middle">
                <Link to="/">
                    <Icon depth={18} theme="light" />
                </Link>
            </section>

            <section className="footer--inner-right">
                <Link className="footer__link--inner" to="/about">About</Link>
                <Link className="footer__link--inner" to="/reference">Resources</Link>
                <Link className="footer__link--inner" to="/donate">Donate</Link>
            </section>
        </Container>
    </footer>
);

export default Footer;
