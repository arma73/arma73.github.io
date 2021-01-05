import Icon from "_components/icon";

import "./Logo.scss";

const Logo = ({ theme = "light" }) => (
    <a className={`logo logo--${theme}`}> 
        <Icon theme={theme} depth={50} />
        <span className="logo__text"> amollo </span>
    </a>
);

export default Logo;
