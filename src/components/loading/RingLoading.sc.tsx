import withUnmount from "_hoc/withUnmount";
import styled from "styled-components";

interface RingLoadingProps {
    "color"?: string;
    "backColor"?: string;
    "size"?: string;
    "onLoaded": () => void;
}

export const RingLoading = withUnmount<RingLoadingProps>(styled.div.attrs(
    ({
        color = "#fff",
        size = "50px",
        backColor = "#c3c3c3",
        ...props
    }: RingLoadingProps) => ({
        ...props,
        size,
        color,
        backColor,
    })
)`
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border: 0.25rem solid;
    border-color: ${({ backColor }) => backColor};
    border-top-color: ${({ color }) => color};
    animation: spin 1s infinite linear;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`);
