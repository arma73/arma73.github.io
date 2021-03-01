import styled from "styled-components";

interface ModalViewProps {
    "visible": boolean;
    "speed": number;
    "maskPaddingVertical"?: string;
}

export const ModalView = styled.div.attrs(
    ({ visible = false, ...props }: ModalViewProps) => ({
        ...props,
        "speed": props.speed,
        "visible": visible,
        "maskPaddingVertical": props.maskPaddingVertical || "3rem",
    })
)`
    display: ${props => (props.visible ? "block" : "none")};
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: fixed;
    padding-top: ${props => props.maskPaddingVertical};
    padding-bottom: ${props => props.maskPaddingVertical};
    background-color: rgba(0, 0, 0, 0.65);
    animation: fading ${props => props.speed}ms forwards ease-out;

    @keyframes fading {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
