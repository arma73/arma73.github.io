import { ComponentType, FC, useEffect } from "react";

type Unmount = <P>(
    WrappedComponent: ComponentType<any>
) => FC<P & { "onLoaded": FunctionOf }>;

const withUnmount: Unmount = WrappedComponent =>
    function UnmountHOC({ onLoaded, ...props }) {
        useEffect(
            () => () => {
                onLoaded();
            },
            [onLoaded]
        );

        return <WrappedComponent {...props} />;
    };

export default withUnmount;
