import { useEffect, useRef, ReactPortal, ReactNode } from "react";
import ReactDOM from "react-dom";

const canUseDOM = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);

type Props = {
    "element"?: keyof HTMLElementTagNameMap;
    "node"?: any;
    "className"?: string;
    "children": ReactNode;
};

const ReactPortal = ({
    element = "div",
    ...props
}: Props): ReactPortal | null => {
    const defaultNode = useRef<Node | null>(null);
    useEffect(
        () => () => {
            if (defaultNode.current) {
                document.body.removeChild(defaultNode.current);
            }
            defaultNode.current = null;
        },
        []
    );

    if (!canUseDOM) {
        return null;
    }

    if (!props.node && !defaultNode.current) {
        defaultNode.current = document.createElement(element);
        if (props.className && defaultNode.current) {
            (defaultNode.current as Element).setAttribute(
                "class",
                props.className
            );
        }
        document.body.appendChild(defaultNode.current);
    }

    return ReactDOM.createPortal(
        props.children,
        props.node || defaultNode.current
    );
};

export default ReactPortal;
