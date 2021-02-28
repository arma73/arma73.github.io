import { useEffect, useState, useCallback } from "react";

type KeyboardHandler = (e: WindowEventMap["keydown"]) => any;

const fill = ["input"];

export const useKeyDown = (
    callback: KeyboardHandler,
    ignoredHtmlElements: string[] = fill
): void => {
    const [ignoreElements, setIgnoreElements] = useState(ignoredHtmlElements);

    const fn = useCallback<KeyboardHandler>(
        e => {
            const { target } = e;
            if (target === null) return;

            if (!ignoreElements.includes(target.nodeName.toLowerCase)) {
                callback(e);
            }
        },
        [callback, ignoreElements]
    );

    useEffect(() => {
        const oldList = ignoreElements;
        ignoredHtmlElements.forEach(element => {
            if (!oldList.includes(element)) {
                oldList.push(element);
            }
        });
        setIgnoreElements(oldList);
    }, [ignoreElements, ignoredHtmlElements]);

    useEffect(() => {
        window.addEventListener("keydown", fn);
        return () => window.removeEventListener("keydown", fn);
    }, [fn]);
};
