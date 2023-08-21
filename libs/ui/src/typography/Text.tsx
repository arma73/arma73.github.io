import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";

import type { FC, HTMLAttributes, ElementType } from "react";
import type { VariantProps } from "class-variance-authority";

export type TextVariantProps = VariantProps<typeof textVariants>;
const textVariants = cva("", {
    variants: {
        vtype: {
            desc: `
          text-typography-text-light text-base
        `,
        },
        vcolor: {
            base: `
          text-typography-text
        `,
            light: `
          text-typography-text-light
        `,
            medium: `
          text-typography-text-medium
        `,
        },
    },
});

interface ITextProps<T extends ElementType = "span">
    extends TextVariantProps,
        HTMLAttributes<T> {
    as?: "span" | "p" | "dd" | "dl" | "dt" | "figcaption" | "sub" | "strong";
}

const Text: FC<ITextProps> = ({
    className,
    vtype,
    children,
    as = "span",
    ...rest
}) => {
    const Tag = as as ElementType;

    return (
        <Tag className={cn(textVariants({ vtype }), className)} {...rest}>
            {children}
        </Tag>
    );
};

export default Text;
