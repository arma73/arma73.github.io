import { useState, useEffect } from "react";

interface Size {
    "width": number;
    "height": number;
}

export const useWindowSize = (): Size => {
    const [size, setSize] = useState<Size>(() => ({
        "width": window.innerWidth,
        "height": window.innerHeight,
    }));

    useEffect(() => {
        const handleResize = () => {
            const { "innerWidth": width, "innerHeight": height } = window;
            setSize(state => ({ ...state, width, height }));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return size;
};
