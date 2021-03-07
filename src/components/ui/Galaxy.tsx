import { useMemo } from "react";
import styled from "styled-components";
import { useWindowSize } from "_src/hooks/useWindowSize";
import "./Galaxy.scss";

const starPosition = ({
    width,
    height,
}: {
    "width": number;
    "height": number;
}) => {
    const randX = Math.floor(Math.random() * width);
    const randY = Math.floor(Math.random() * (height / 2));
    return { randX, randY };
};

const StyledSmollStar = styled.div.attrs(
    ({ x, y, ...props }: { "x": number; "y": number }) => ({ ...props, x, y })
)`
    top: ${({ y }) => y}px;
    left: ${({ x }) => x}px;
    opacity: ${() => Math.random() - 0.2};
`;

const Galaxy = () => {
    const size = useWindowSize();

    const mapStars = useMemo(
        () =>
            Array(20)
                .fill(null)
                .map((_, index) => {
                    const { randX, randY } = starPosition(size);

                    return (
                        <StyledSmollStar
                            x={randX}
                            y={randY}
                            className="small-star"
                            key={index}
                        />
                    );
                }),
        [size]
    );

    const mapCircles = () =>
        Array(7)
            .fill(null)
            .map((_, index) => (
                <div className={`circle-${index + 1} circle`} key={index} />
            ));

    return (
        <div className="galaxy">
            <div className="container">
                <div className="pink-planet">
                    <div className="circles">{mapCircles()}</div>
                </div>
                <div className="blue-planet" />
            </div>
            <div className="small-stars">{mapStars}</div>
            <div className="white-gradient" />
        </div>
    );
};

export default Galaxy;
