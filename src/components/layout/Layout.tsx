import clsx from "clsx";
import { FC, ReactNode } from "react";
import withServiceWorker from "_hoc/withServiceWorker";

interface LayoutProps {
    "children": ReactNode;
    "className": string;
}

const Layout: FC<LayoutProps> = ({ children, className }) => (
    <main className={clsx("layout", className)}>{children}</main>
);

export default withServiceWorker(Layout);
