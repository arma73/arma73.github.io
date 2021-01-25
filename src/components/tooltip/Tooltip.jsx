import clsx from "clsx";
import { TransitionShow } from "_components/animated";

import "./Tooltip.scss";

const Tooltip = ({ 
    show = false, 
    text = "",
    className,
    ...restProps 
}) => {
    const render = (
        <div 
            className={clsx("tooltip", "center", className)}
            {...restProps}
        >
            <p><strong>{text}</strong></p>
        </div>
    );

    return (
        <TransitionShow
            show={show}
            render={render}
        />
    );
};

export default Tooltip;
