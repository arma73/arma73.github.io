import { isValidElement, Children, cloneElement, useRef } from "react";
import { Spring } from "react-spring/renderprops";
import { useHover } from "_hooks";

const RiseAnimated = ({ fromX = "0px", fromY = "0px", toX, toY, children }) => {
    const [isHovered, bind] = useHover();
    const ref = useRef(null);

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
