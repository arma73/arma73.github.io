import { FC, ReactNode } from "react";

import "./ModalView.scss";

interface ModalViewProps {
    "children": ReactNode;
    "visible": boolean;
    "speed": number;
    "maskPaddingVertical"?: string;
}

const ModalView: FC<ModalViewProps> = ({
    visible = false,
    speed,
    maskPaddingVertical = "3rem",
    children,
}) => {
    const style = {
        "display": visible ? "block" : "none",
        "animationDuration": `${speed}ms`,
        "paddingTop": maskPaddingVertical,
        "paddingBottom": maskPaddingVertical,
    };

    return (
        <div style={style} className="modalView">
            {children}
        </div>
    );
};

export default ModalView;
