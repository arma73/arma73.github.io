import clsx from "clsx";

import "./Container.scss";

const Container = ({ children, className = "", ...restProps }) => (
    <main className={clsx("container", className)} {...restProps}>
        {children}
    </main>
);

export default Container;
