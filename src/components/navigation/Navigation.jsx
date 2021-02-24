import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = ({ theme }) => {
    const mapNavItems = () => {
        const items = ["guides", "reference", "glossary", "analyze", "donate"];

        return items.map(item => (
            <NavLink
                key={item}
                className="nav__link"
                activeClassName="nav__link--active"
                to={`/${item}`}
            >
                {item}
            </NavLink>
        ));
    };

    return <nav className={`nav nav--${theme}`}>{mapNavItems()}</nav>;
};

export default Navigation;
