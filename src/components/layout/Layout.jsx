import clsx from "clsx";
import withServiceWorker from "_containers/hoc/withServiceWorker";

const Layout = ({ children, className, ...restProps }) => (
    <main className={clsx("layout", className)} {...restProps}>
        {children}
    </main>
);

export default withServiceWorker(Layout);
