import { ReactNode, FC } from "react";
import clsx from "clsx";
import Responsive, { LegoMediaQuery } from "./Responsive";

import "./View.scss";

interface ViewProps extends LegoMediaQuery {
    "children": ReactNode;
    "className"?: string;
}

const View: FC<ViewProps> = ({ children, className, span, ...props }) => (
    <Responsive className={clsx("view", className)} span={span} {...props}>
        {children}
    </Responsive>
);

export default View;
