import { FC } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

interface NavigationProps {
    "theme": "dark" | "light";
}

const Navigation: FC<NavigationProps> = ({ theme }) => {
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
