/* eslint-disable max-lines */
"use client";

import { useRef, useEffect, useState } from "react";
import {
    firstGroupIcons,
    fivthGroupIcons,
    fourthGroupIcons,
    secondGroupIcons,
    thirdGroupIcons,
} from "#web/components/icons/stack";
import { timeline } from "motion";
import { intersectionObserver } from "#web/utils";
import { isBrowser } from "#web/utils";
import clsx from "clsx";

import styles from "./Caterpillar.module.css";
import type {
    AnimationControls,
    TimelineDefinition,
    BezierDefinition,
} from "motion";

const Caterpillar = () => {
    const timelines = useRef<Array<AnimationControls>>([]);
    const mql = useRef<MediaQueryList | null>(null);
    const prefers_reduced_motion = useRef<boolean>(false);
    const rootEl = useRef<HTMLDivElement>(
        isBrowser ? document.createElement("div") : null
    );
    const [inViewport, setInViewport] = useState<boolean>(false);
    const cardRefs = useRef<Array<HTMLDivElement>>([]);
    const socialCards = useRef([
        firstGroupIcons,
        secondGroupIcons,
        thirdGroupIcons,
        fourthGroupIcons,
        fivthGroupIcons,
    ]);

    useEffect(() => {
        if (inViewport) {
            init();
        }
    }, [inViewport]);

    const handleMqlChange = ({ matches }: MediaQueryListEvent) => {
        prefers_reduced_motion.current = matches;
        if (matches) {
            timelines.current.forEach(tl => {
                tl?.pause();
            });
        } else {
            timelines.current.forEach(tl => {
                tl?.play();
            });
        }
    };

    function init() {
        timelines.current = [];

        const a = 10;
        const duration = 1.6;
        const stagger = 0.05;
        const easing: BezierDefinition = [0.645, 0.045, 0.355, 1];

        cardRefs.current.map((el, i) => {
            const sequence: TimelineDefinition = [
                [
                    el,
                    {
                        transform: `translateX(0%) translateY(0%) translateZ(${
                            a - 6
                        }px) scale(0.9)`,
                        opacity: 0,
                    },
                    { easing, duration: 0, at: 0 },
                ],
                [
                    el,
                    {
                        transform: `translateX(0%) translateY(0%) translateZ(${
                            a - 5
                        }px) scale(1)`,
                        opacity: 1,
                    },
                    { easing, duration, at: 0 },
                ],
                [
                    el,
                    {
                        transform: `translateX(-20%) translateY(20%) translateZ(${
                            a - 4
                        }px) scale(1)`,
                    },
                    { easing, duration, at: duration },
                ],
                [
                    el,
                    {
                        transform: `translateX(-40%) translateY(40%) translateZ(${
                            a - 3
                        }px) scale(1)`,
                    },
                    { easing, duration, at: duration * 2 },
                ],
                [
                    el,
                    {
                        transform: `translateX(-60%) translateY(60%) translateZ(${
                            a - 2
                        }px) scale(1)`,
                    },
                    { easing, duration, at: duration * 3 },
                ],
                [
                    el,
                    {
                        transform: `translateX(-80%) translateY(80%) translateZ(${
                            a - 1
                        }px) scale(1)`,
                    },
                    { easing, duration, at: duration * 4 },
                ],
                [
                    el,
                    {
                        opacity: 0,
                        transform: `translateX(-85%) translateY(85%) translateZ(${a}px) scale(0.8)`,
                    },
                    { duration: duration * 0.3, at: duration * 4.3 },
                ],
            ];

            const tl = timeline(sequence, {
                repeat: Infinity,
                delay: -i * (duration + stagger),
            });
            timelines.current.push(tl);

            if (prefers_reduced_motion.current) {
                tl?.pause();
            }
        });
    }

    useEffect(() => {
        {
            mql.current = window.matchMedia("(prefers-reduced-motion: reduce)");
            mql.current.addEventListener("change", handleMqlChange);
            prefers_reduced_motion.current = mql.current.matches;
        }
        const rootRefedEl = rootEl.current;
        if (rootRefedEl) {
            intersectionObserver.observe(rootRefedEl, ({ isIntersecting }) => {
                setInViewport(isIntersecting);
            });
        }

        return () => {
            if (mql.current) {
                mql.current.removeEventListener("change", handleMqlChange);
            }
            rootRefedEl && intersectionObserver.unobserve(rootRefedEl);
        };
    }, []);

    return (
        <section className={clsx(styles.caterpillar, "h-full")}>
            <div
                className={clsx(
                    styles.visual,
                    "grid grid-cols-1 grid-rows-1 ml-auto mt-2.5 sm:right-[15%] lg:right-0 place-items-end relative w-full h-full"
                )}
                aria-hidden="true"
                ref={rootEl}
                data-reducemotion={prefers_reduced_motion.current}>
                <div
                    className={clsx(
                        styles.stack,
                        "delay-200 absolute top-0 h-1/2 xs:h-3/5 w-3/5 sm:h-1/2 sm:w-2/5 md:w-2/5 md:h-3/5 lg:w-1/2 lg:h-3/5"
                    )}>
                    {socialCards.current.map((card, i) => (
                        <div
                            key={i}
                            ref={el =>
                                (cardRefs.current[i] = el as HTMLDivElement)
                            }
                            className={clsx(
                                styles.card,
                                "flex items-center justify-center absolute right-0 rounded-3xl p-3  w-full h-full"
                            )}>
                            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                                {card.map((icon, index) => {
                                    const IconStack = icon;
                                    return (
                                        <IconStack
                                            className="col-span-1 w-7 h-7 xs:w-9 xs:h-9 sm:w-10 sm:h-10 fill-neutral-700 dark:fill-neutral-500"
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Caterpillar;
