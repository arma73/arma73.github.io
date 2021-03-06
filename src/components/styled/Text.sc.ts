import styled from "styled-components";

interface TextProps {
    "size"?: string;
    "color"?: string;
    "weight"?: number;
    "height"?: string;
}

export const Text = styled.p.attrs(
    ({
        size = "18px",
        color = "#5e6788",
        height = "1.5em",
        weight = 500,
        ...props
    }: TextProps) => ({
        ...props,
        size,
        color,
        height,
        weight,
    })
)`
    margin-top: 1em;
    font-size: ${({ size }) => size};
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
    text-align: left;
    line-height: ${({ height }) => height};
`;
