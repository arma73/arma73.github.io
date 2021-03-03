import { ReactNode } from "react";
import { Link } from "react-router-dom";

const isExternalLink = (url: string) =>
    typeof url === "string" &&
    (url.startsWith("http") ||
        url.startsWith("https") ||
        url.startsWith("mailto") ||
        url.startsWith("tel:"));

interface UnifiedLinkProps {
    "children": ReactNode;
    "to": string;
    "className"?: string;
    "target"?: "_blank";
}

export const UnifiedLink: React.FC<UnifiedLinkProps> = ({
    to,
    children,
    target = "",
    className,
}) => {
    const Component = (to && isExternalLink(to)) || !!target ? "a" : Link;

    return Component === "a" ? (
        <Component className={className} target={target} href={to}>
            {children}
        </Component>
    ) : (
        <Component to={to} className={className}>
            {children}
        </Component>
    );
};
