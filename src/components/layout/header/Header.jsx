import clsx from "clsx";
import Logo from "_components/logo";

import "./Header.scss";

const Header = ({ className, ...restProps }) => (
    <header className={clsx("header", "center", className)} {...restProps}>
        <Logo />
    </header>
);

export default Header;
