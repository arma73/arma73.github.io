import clsx from "clsx";
import { FC, ReactNode } from "react";

import "./Container.scss";

interface ContainerProps {
    "children": ReactNode;
    "className"?: string;
}

const Container: FC<ContainerProps> = ({ children, className = "" }) => (
    <main className={clsx("container", className)}>{children}</main>
);

export default Container;
