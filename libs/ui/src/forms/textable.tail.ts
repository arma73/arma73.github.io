import { cva, type VariantProps } from "class-variance-authority";

export const inputAbleVariants = cva(
    [
        "block w-full",
        "rounded-md shadow-sm border ring-inset focus:outline-2 focus:outline-inset",
    ],
    {
        variants: {
            vtype: {
                none: "",
                primary:
                    "text-typography-text border-consistent placeholder:text-typography-text-light/80 focus:outline-primary",
                secondary: "",
            },
            vsize: {
                none: "",
                xs: "text-xs px-2 py-1",
                sm: "text-sm px-3 py-1",
                md: "text-sm px-3 py-1.5",
                lg: "text-base px-4 py-2",
                xl: "text-lg px-4 py-2",
                xxl: "text-xl px-5 py-2.5",
            },
            disabled: {
                true: "opacity-50 cursor-not-allowed pointer-events-none",
            },
        },
    }
);

export type InputAbleVariantsProps = VariantProps<typeof inputAbleVariants>;
