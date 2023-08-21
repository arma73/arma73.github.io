import CircledUIBox from "./CircledUIBox";
import clsx from "clsx";

import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

interface IAvatarBoxProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: "lg" | "md" | "sm";
}

const AvatarBox: FC<IAvatarBoxProps> = ({
    className,
    size = "md",
    ...props
}) => {
    return (
        <CircledUIBox
            vsize="none"
            block="center"
            className={clsx(
                {
                    "h-16 w-16": size === "lg",
                    "h-10 w-10": size === "md",
                    "h-6 w-6": size === "sm",
                },
                className
            )}
            {...props}
        />
    );
};

export default AvatarBox;
