import { ReactNode } from "react";
import { To } from "history";
import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface LinkButtonProps extends LinkProps {
    "children": ReactNode;
    "to": To;
    "className"?: string;
    "onClick"?: FunctionOf;
}

const NormalizeButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;

export const LinkButton: React.FC<LinkButtonProps> = ({
    to,
    children,
    className,
    id,
    onClick,
    ...props
}) => (
    <Link to={to} {...props}>
        <NormalizeButton onClick={onClick} id={id} className={className}>
            {children}
        </NormalizeButton>
    </Link>
);
