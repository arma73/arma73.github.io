import { useEffect, useRef } from "react";

export const useBlockScroll = (visible: boolean): void => {
    const domRef = useRef({ "overflowY": document.body.style.overflowY });

    useEffect(() => {
        const copyRef = domRef.current;

        if (visible) {
            document.body.style.overflowY = "hidden";
            document.documentElement.style.overflowY = "hidden";
        } else {
            domRef.current.overflowY = document.body.style.overflowY;
            document.body.style.overflowY = domRef.current.overflowY;
            document.documentElement.style.overflowY = domRef.current.overflowY;
        }

        return () => {
            document.body.style.overflowY = copyRef.overflowY;
            document.documentElement.style.overflowY = copyRef.overflowY;
        };
    }, [visible]);
};
