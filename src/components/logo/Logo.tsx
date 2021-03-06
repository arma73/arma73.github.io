import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutePage } from "_settings/path.routes";
import IconLogo from "_theme/icons/logo-default.svg";

import "./Logo.scss";

interface LogoProps {
    "theme"?: "dark" | "light";
}

const Logo: FC<LogoProps> = ({ theme = "light" }) => (
    <Link to={RoutePage.MAIN} className={`logo logo--${theme}`}>
        <IconLogo width={"35px"} />
    </Link>
);

export default Logo;
