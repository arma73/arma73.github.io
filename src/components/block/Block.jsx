import clsx from "clsx";

import "./Block.scss";

const Block = ({ children, className, ...restProps }) => (
    <div className={clsx("block", className)} {...restProps}>
        {children}
    </div>
);

export default Block;
