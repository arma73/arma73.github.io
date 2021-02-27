import { useEffect, useState } from "react";

interface Point {
    "x": number;
    "y": number;
}

export const useMousePosition = <T>(callback: FunctionOf<Point, T>): Point => {
    const [position, setPosition] = useState<Point>({ "x": 0, "y": 0 });

    useEffect(() => {
        let setFromEvent: (e: MouseEvent) => T | void;

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
