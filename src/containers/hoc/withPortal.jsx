import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

const withPortal = dom => WrappedComponent =>
    function ProvidePortal(props) {
        const [node, setNode] = useState(null);

        useEffect(() => {
            const domNode = document.querySelector(dom);
            setNode(domNode);
        }, []);

        if (!dom) return WrappedComponent;
        return node && dom ? (
            createPortal(<WrappedComponent {...props} />, node)
        ) : (
            <WrappedComponent {...props} />
        );
    };

export default withPortal;
