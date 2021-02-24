import clsx from "clsx";

import "./Square.scss";

const Square = ({ children, className }) => (
    <div className={clsx("square", className)}>{children}</div>
);

export default Square;
