import { ComponentType, FC, useEffect } from "react";

type ScrollTo = <P>(WrappedComponent: ComponentType<P>) => FC<P>;

const withScrollTo: ScrollTo = WrappedComponent =>
    function ScrollTo(props) {
        useEffect(() => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView();
                }
            } else {
                window.scrollTo(0, 0);
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

export default withScrollTo;
