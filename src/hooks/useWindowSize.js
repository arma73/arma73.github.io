import { useState, useEffect } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState(() => ({ "width": window.innerWidth, "height": window.innerHeight }));

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
