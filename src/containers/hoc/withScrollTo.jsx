import { useEffect } from "react";

const withScrollTo = WrappedComponent =>
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
