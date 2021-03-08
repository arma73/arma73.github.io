import { createPortal } from "react-dom";
import { useState, useEffect, ComponentType, FC } from "react";
import { canUseDOM } from "_utils/isClient";

type Portal = <P>(dom: string) => (WrappedComponent: ComponentType<P>) => FC<P>;

const withPortal: Portal = (dom: string) => WrappedComponent =>
    function ProvidePortal(props) {
        const [node, setNode] = useState<Element | null>(null);

        useEffect(() => {
            const domNode = !canUseDOM ? null : document.querySelector(dom);
            setNode(domNode);
        }, []);

        return node ? (
            createPortal(<WrappedComponent {...props} />, node)
        ) : (
            <WrappedComponent {...props} />
        );
    };

export default withPortal;
