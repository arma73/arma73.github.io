import { FC } from "react";
import clsx from "clsx";

import "./StraightLine.scss";

interface StraightLineProps {
    "options"?: {
        "fill"?: boolean;
        "short"?: boolean;
        "withAnimation"?: boolean;
    };
    "lines"?: number;
}

const StraightLine: FC<StraightLineProps> = ({ options = {}, lines = 3 }) => {
    const { fill = false, short = false, withAnimation = false } = options;

    const mapLines = () => (
        <>
            {fill && (
                <div
                    className={clsx(
                        "straight-line",
                        withAnimation && "animation"
                    )}
                />
            )}
            {new Array<null>(lines).fill(null).map((_, index) => (
                <div
                    className={clsx(
                        "straight-line-full",
                        withAnimation && "animation"
                    )}
                    key={index}
                />
            ))}
            {short && (
                <div
                    className={clsx(
                        "shortened straight-line-full",
                        withAnimation && "animation"
                    )}
                />
            )}
        </>
    );

    return mapLines();
};

export default StraightLine;
