import Container from "_components/container";

import "./Banner.scss";

// TODO: change Banner name later
const Banner = ({ children }) => (
    <div className="banner">
        <Container className="banner--inner">
            {children}
        </Container>
    </div>
);

export default Banner;
