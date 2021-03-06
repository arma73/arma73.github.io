import { FC } from "react";
import styled from "styled-components";
import "./WindowIOS.scss";

const StyledWindowIOS = styled.div.attrs(
    ({ width = "600px", height = "auto", ...props }: WindowIOSProps) => ({
        ...props,
        width,
        height,
    })
)`
    display: block;
    width: 50%;
    max-width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: white;
    border: 1px solid #ebebeb;
    border-radius: 15px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .viewport {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }
`;

interface WindowIOSProps {
    "width"?: string;
    "height"?: string;
}

const WindowIOS: FC<WindowIOSProps> = ({ children, width, height }) => (
    <StyledWindowIOS width={width} height={height}>
        <div className="window-top">
            <div className="button x" />
            <div className="button min" />
            <div className="button max" />
        </div>
        <div className="viewport">{children}</div>
    </StyledWindowIOS>
);

export default WindowIOS;
