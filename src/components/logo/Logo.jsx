import { Link } from "react-router-dom";
import IconLogo from "_theme/icons/logo-default.svg";

import "./Logo.scss";

const Logo = ({ theme = "light" }) => (
    <Link to="/" className={`logo logo--${theme}`}>
        <IconLogo width={"35px"} />
    </Link>
);

export default Logo;
