import clsx from "clsx";

import "./Section.scss";

const Section = ({ children, className, ...restProps }) => (
    <section className={clsx("section", className)} {...restProps}>
        {children}
    </section>
);

export default Section;
