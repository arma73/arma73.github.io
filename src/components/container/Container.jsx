import clsx from "clsx";

import "./Container.scss";

const Container = ({ children, className}) => (
    <div className={clsx("container", className)}>
        {children}
    </div>
);

export default Container;
