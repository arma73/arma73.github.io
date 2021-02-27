import { FC } from "react";
import clsx from "clsx";
import { TransitionShow } from "_components/animated";

import "./Tooltip.scss";

interface TooltipProps {
    "show"?: boolean;
    "text"?: string;
    "className"?: string;
}

const Tooltip: FC<TooltipProps> = ({
    show = false,
    text = "",
    className = "",
}) => {
    const render = (
        <div className={clsx("tooltip", "center", className)}>
            <p>
                <strong>{text}</strong>
            </p>
        </div>
    );

    return <TransitionShow show={show} render={render} />;
};

export default Tooltip;
