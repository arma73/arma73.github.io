import { createPortal } from "react-dom";
import { useState, useEffect, ComponentType, FC } from "react";

type Portal = <P>(dom: string) => (WrappedComponent: ComponentType<P>) => FC<P>;

const withPortal: Portal = (dom: string) => WrappedComponent =>
    function ProvidePortal(props) {
        const [node, setNode] = useState<Element | null>(null);

        useEffect(() => {
            const domNode = document.querySelector(dom);
            setNode(domNode);
        }, []);

        return node ? (
            createPortal(<WrappedComponent {...props} />, node)
        ) : (
            <WrappedComponent {...props} />
        );
    };

export default withPortal;
