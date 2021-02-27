import clsx from "clsx";
import { FC } from "react";
import Logo from "_components/logo";

import "./Header.scss";

interface HeaderProps {
    "className"?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => (
    <header className={clsx("header", "center", className)}>
        <Logo />
    </header>
);

export default Header;
