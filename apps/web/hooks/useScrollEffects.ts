import { useEffect, useRef } from "react";
import { clamp } from "#web/utils";

function setProperty(property: string, value: string) {
    document.documentElement.style.setProperty(property, value);
}

function removeProperty(property: string) {
    document.documentElement.style.removeProperty(property);
}

interface IScrollOptions {
    upDelay: number;
}

function updateHeaderStyles(
    el: HTMLDivElement,
    isInitial: boolean,
    options: IScrollOptions
) {
    const { top, height } = el.getBoundingClientRect();
    const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
    );

    if (isInitial) {
        setProperty("--header-position", "sticky");
    }

    const { upDelay } = options;

    if (isInitial) {
        setProperty("--header-height", `${height}px`);
    } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
    } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
    }

    if (top === 0 && scrollY > 0) {
        setProperty("--header-inner-position", "fixed");
        removeProperty("--header-top");
        removeProperty("--avatar-top");
    } else {
        removeProperty("--header-inner-position");
        setProperty("--header-top", "0px");
        setProperty("--avatar-top", "0px");
    }
}

/**
 * Custom hook to update header and avatar styles based on scroll position.
 * @param {boolean} isHomePage - Indicates if the current page is the home page.
 */
export const useScrollEffects = () => {
    const isInitial = useRef(true);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const upDelay = 64;

        function updateStyles() {
            if (!headerRef.current) return;

            updateHeaderStyles(headerRef.current, isInitial.current, {
                upDelay,
            });

            isInitial.current = false;
        }

        window.addEventListener("scroll", updateStyles, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateStyles);
        };
    }, []);

    return {
        headerRef,
    };
};
