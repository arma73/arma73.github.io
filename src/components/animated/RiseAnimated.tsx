import {
    isValidElement,
    Children,
    cloneElement,
    useRef,
    ReactNode,
    forwardRef,
    useImperativeHandle,
} from "react";
import { Spring } from "react-spring/renderprops";
import { useHover } from "_hooks/useHover";
import { RefHtmlDivElement } from "_interfaces/reference.interface";

interface RiseAnimatedProps {
    "fromX"?: string;
    "fromY"?: string;
    "toX": string;
    "toY": string;
    "children": ReactNode;
}

const RiseAnimated = forwardRef<HTMLDivElement, RiseAnimatedProps>(
    function RiseAnimatedComp(
        { fromX = "0px", fromY = "0px", toX, toY, children },
        externalRef
    ) {
        const ref = useRef<HTMLDivElement>(null);
        const [isHovered, bind] = useHover();

        useImperativeHandle<RefHtmlDivElement, RefHtmlDivElement>(
            externalRef,
            () => ref.current
        );

        return (
            <Spring
                immediate={!ref.current}
                reset={true}
                from={{
                    "transform": `translateX(${fromX}) translateY(${fromY})`,
                }}
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
    }
);

export default RiseAnimated;
