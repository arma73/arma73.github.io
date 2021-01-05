import { Link } from "react-router-dom";
import Icon from "_components/icon";

import "./Logo.scss";

const Logo = ({ theme = "light" }) => (
    <Link to="/" className={`logo logo--${theme}`}> 
        <Icon theme={theme} depth={50} />
        <span className="logo__text"> amollo </span>
    </Link>
);

export default Logo;
