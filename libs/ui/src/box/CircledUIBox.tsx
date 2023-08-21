import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";

import type { ElementType, ComponentProps, ReactNode, Ref } from "react";
import type { VariantProps } from "class-variance-authority";
import type { PropsWithClassName } from "@lib/interfaces";

type BoxVariantsProps = VariantProps<typeof boxVariants>;
const boxVariants = cva(
    `rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 backdrop-blur dark:bg-zinc-800/90`,
    {
        variants: {
            vtype: {
                bordered: `ring-1 ring-consistent hover:ring-consistent-accent`,
            },
            vsize: {
                none: "",
                sm: "px-1",
                md: "px-3",
            },
            block: {
                center: "flex items-center justify-center",
            },
        },
    }
);

type CircledUIBoxOwnProps<E extends ElementType = typeof defaultElement> =
    PropsWithClassName<
        {
            as?: E;
        } & BoxVariantsProps
    >;

type CircledUIBoxProps<E extends ElementType> = CircledUIBoxOwnProps<E> &
    Omit<ComponentProps<E>, keyof CircledUIBoxOwnProps>;

const defaultElement = "div";

const CircledUIBoxComponent = <T extends ElementType = typeof defaultElement>(
    props: CircledUIBoxOwnProps<T>,
    ref: Ref<Element>
) => {
    const {
        as: Element = defaultElement,
        vsize = "md",
        vtype = "bordered",
        block,
        className,
        ...rest
    } = props;
    // FIXME: Ref<any>
    return (
        <Element
            className={cn(
                boxVariants({ vsize: vsize, block, vtype }),
                className
            )}
            ref={ref as Ref<any>}
            {...rest}
        />
    );
};

const CircledUIBox: <E extends ElementType = typeof defaultElement>(
    props: CircledUIBoxProps<E>
) => ReactNode = forwardRef(CircledUIBoxComponent);

export default CircledUIBox;
