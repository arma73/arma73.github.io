import { useState, useMemo } from "react";

type HoverResponse = () => [
    boolean,
    {
        "onMouseOver": () => void;
        "onMouseLeave": () => void;
    }
];

export const useHover: HoverResponse = () => {
    const [isHovered, setIsHovered] = useState(false);

    const bind = useMemo(
        () => ({
            "onMouseOver": () => setIsHovered(true),
            "onMouseLeave": () => setIsHovered(false),
        }),
        []
    );

    return [isHovered, bind];
};
