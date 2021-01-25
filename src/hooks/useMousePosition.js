import { useEffect, useState } from "react";

export const useMousePosition = callback => {
    const [position, setPosition] = useState({ "x": 0, "y": 0 });

    useEffect(() => {
        let setFromEvent;
        
        if (callback) {
            setFromEvent = e => callback({ "x": e.clientX, "y": e.clientY });
            window.addEventListener("mousemove", setFromEvent);
        } else {
            setFromEvent = e => setPosition({ "x": e.clientX, "y": e.clientY });
            window.addEventListener("mousemove", setFromEvent);
        }

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, [callback]);

    return position;
};
