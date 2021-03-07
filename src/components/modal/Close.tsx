import { ReactNode, FC, MouseEvent, SVGProps } from "react";
import MdClose from "_theme/icons/close.svg";
import "./Close.scss";

interface CloseProps {
    "children"?: ReactNode;
    "onClick": (event: MouseEvent<HTMLSpanElement>) => void;
    "color"?: string;
    "icon"?: FC<SVGProps<SVGSVGElement>>;
}

const Close: FC<CloseProps> = ({
    children = null,
    color = "#807b7b",
    onClick,
    icon = <MdClose />,
}) => (
    <span className="closeModal" style={{ "fill": color }} onClick={onClick}>
        {icon}
        {children}
    </span>
);

export default Close;
