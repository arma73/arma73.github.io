import { FC } from "react";

import "./StraightLine.scss";

interface StraightLineProps {
    "options"?: {
        "fill"?: boolean;
        "short"?: boolean;
    };
    "lines"?: number;
}

const StraightLine: FC<StraightLineProps> = ({ options = {}, lines = 3 }) => {
    const { fill = false, short = false } = options;

    const mapLines = () => (
        <>
            {fill && <div className="straight-line" />}
            {new Array<null>(lines).fill(null).map((_, index) => (
                <div className="straight-line-full" key={index} />
            ))}
            {short && <div className="shortened straight-line-full" />}
        </>
    );

    return mapLines();
};

export default StraightLine;
