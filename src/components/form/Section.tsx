import clsx from "clsx";
import { CSSProperties, FC, ReactNode } from "react";

import "./Section.scss";

interface SectionProps {
    "children": ReactNode;
    "className"?: string;
    "style"?: CSSProperties;
}

const Section: FC<SectionProps> = ({
    children,
    className = "",
    style = {},
}) => (
    <section className={clsx("section", className)} style={style}>
        {children}
    </section>
);

export default Section;
