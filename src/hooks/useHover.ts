import { useState, useMemo } from "react";

type SignatureUseHover = () => (
    | boolean
    | {
          "onMouseOver": () => void;
          "onMouseLeave": () => void;
      }
)[];

export const useHover: SignatureUseHover = () => {
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
