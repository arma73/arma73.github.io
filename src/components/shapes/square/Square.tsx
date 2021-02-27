import { ReactNode, FC } from "react";
import clsx from "clsx";

import "./Square.scss";

interface SquareProps {
    "children"?: ReactNode;
    "className"?: string;
}

const Square: FC<SquareProps> = ({ children = null, className = "" }) => (
    <div className={clsx("square", className)}>{children}</div>
);

export default Square;
