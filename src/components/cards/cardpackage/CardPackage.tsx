import { FC } from "react";
import clsx from "clsx";
import { RiseAnimated } from "_components/animated";
import StraightLine from "_components/straightline";
import Circle from "_components/shapes/circle";

import "./CardPackage.scss";

interface CardPackageProps {
    "isAnimated"?: boolean;
    "className"?: string;
}

const CardPackage: FC<CardPackageProps> = ({
    isAnimated = false,
    children = null,
    className,
}) => (
    <div className={clsx("card--package", className)}>
        {isAnimated ? (
            <RiseAnimated toX="-4px" toY="-4px">
                <div className={"card--column"}>
                    <Circle />
                    {children}
                    <StraightLine />
                </div>
            </RiseAnimated>
        ) : (
            <div className="card--column">
                <Circle />
                <StraightLine />
            </div>
        )}
    </div>
);

export default CardPackage;
