import { MouseEvent, FC, memo } from "react";
import { SVGId, SVG, PathNames } from "./SVG";

export type IconProps = {
    "icon": SVGId;
    "size"?: string;
    "className"?: string;
    "path"?: PathNames;
    "onClick"?: (event: MouseEvent<HTMLDivElement>) => void;
    "onLoaded"?: FunctionOf;
};

const Icon: FC<IconProps> = ({
    icon,
    onClick,
    className,
    path,
    size = "50px",
    onLoaded,
}) => (
    <div className={className} onClick={onClick}>
        <SVG id={icon} size={size} path={path} onLoaded={onLoaded} />
    </div>
);

export default memo(Icon);
