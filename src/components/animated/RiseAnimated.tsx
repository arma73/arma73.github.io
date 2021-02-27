import {
    isValidElement,
    Children,
    cloneElement,
    useRef,
    ReactNode,
    FC,
} from "react";
import { Spring } from "react-spring/renderprops";
import { useHover } from "_hooks/useHover";

interface RiseAnimatedProps {
    "fromX"?: string;
    "fromY"?: string;
    "toX": string;
    "toY": string;
    "children": ReactNode;
}

const RiseAnimated: FC<RiseAnimatedProps> = ({
    fromX = "0px",
    fromY = "0px",
    toX,
    toY,
    children,
}) => {
    const [isHovered, bind] = useHover();
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Spring
            immediate={!ref.current}
            reset={true}
            from={{ "transform": `translateX(${fromX}) translateY(${fromY})` }}
            to={{ "transform": `translateX(${toX}) translateY(${toY})` }}
            reverse={!isHovered}
        >
            {props =>
                Children.map(children, child => {
                    if (isValidElement(child)) {
                        return cloneElement(child, {
                            "style": props,
                            ref,
                            "data-hovered": isHovered,
                            ...bind,
                        });
                    }
                    return child;
                })
            }
        </Spring>
    );
};

export default RiseAnimated;
