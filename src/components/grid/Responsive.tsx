import { ElementType, HTMLAttributes } from "react";
import { Properties } from "csstype";
import Flex from "./Flex.sc";
import Collapse from "./Collapse";
import { HtmlTag } from "_interfaces/document.interface";
import { TypeText } from "_interfaces/type.interface";

export interface LegoMediaQuery {
    "span"?: TypeText;
    "xsmall"?: TypeText;
    "small"?: TypeText;
    "medium"?: TypeText;
    "large"?: TypeText;
    "xlarge"?: TypeText;
}

export interface TypeContainer
    extends LegoMediaQuery,
        HTMLAttributes<HTMLElement> {
    "time"?: TypeText;
    "direction"?: Properties["flexDirection"];
}

interface ResponsiveProps extends TypeContainer {
    "isCollapse"?: boolean;
    "show"?: boolean;
    "htmlTag"?: HtmlTag;
    "Component"?: ElementType;
}

const Responsive = React.forwardRef<HTMLDivElement, ResponsiveProps>(
    function ResponseRef(
        {
            children,
            Component = Flex,
            htmlTag = "div",
            isCollapse = false,
            show = true,
            time = 450,
            ...props
        },
        ref
    ) {
        if (!isCollapse) {
            return (
                <Component as={htmlTag} {...props} ref={ref}>
                    {children}
                </Component>
            );
        }
        return (
            <Collapse isOpened={show} time={time}>
                <Component as={htmlTag} {...props} ref={ref}>
                    {children}
                </Component>
            </Collapse>
        );
    }
);

export default Responsive;
