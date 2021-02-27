import clsx from "clsx";
import { ReactNode, FC } from "react";

import "./Block.scss";

interface BlockProps {
    "children": ReactNode;
    "className"?: string;
}

const Block: FC<BlockProps> = ({ children, className = "" }) => (
    <div className={clsx("block", className)}>{children}</div>
);

export default Block;
