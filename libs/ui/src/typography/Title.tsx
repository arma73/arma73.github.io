import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";

import type { FC, HTMLAttributes, ElementType } from "react";
import type { VariantProps } from "class-variance-authority";

export type TitleVariantProps = VariantProps<typeof titleVariants>;
const titleVariants = cva("text-typography-title tracking-tight", {
    variants: {
        vsize: {
            1: "text-4xl sm:text-5xl font-bold",
            2: "text-xl sm:text-2xl font-bold leading-7",
            3: "text-lg sm:text-xl font-bold",
            4: "text-md sm:text-lg font-semibold",
            5: "text-sm font-semibold",
        },
    },
});

interface ITitleProps<T extends ElementType = "h1">
    extends TitleVariantProps,
        HTMLAttributes<T> {
    level?: 1 | 2 | 3 | 4 | 5;
}

const Title: FC<ITitleProps> = ({
    className,
    children,
    level = 1,
    vsize = level,
    ...rest
}) => {
    const Tag = `h${level}` as ElementType;

    return (
        <Tag className={cn(titleVariants({ vsize }), className)} {...rest}>
            {children}
        </Tag>
    );
};

export default Title;
