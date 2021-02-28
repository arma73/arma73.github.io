import { FC, ReactNode } from "react";
import clsx from "clsx";

import "./Flex.scss";

interface FlexProps {
    "direction"?: string;
    "children": ReactNode;
    "span"?: string;
    "xsmall"?: string;
    "medium"?: string;
    "large"?: string;
    "small"?: string;
    "xlarge"?: string;
}

const Flex: FC<FlexProps> = ({
    direction = "row",
    children,
    span = "100%",
}) => {
    const style = {
        "flex": `0 0 ${span}`,
    };

    return (
        <div className={clsx("flex", direction)} style={style}>
            {children}
        </div>
    );
};

export default Flex;
