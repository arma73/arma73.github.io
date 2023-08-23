import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

export type ToastVariantTypes = VariantProps<typeof toastVariants>;
export const toastVariants = cva(
    [
        "group w-full relative flex overflow-hidden justify-between",
        "bg-background",
        "pointer-events-auto transition-all",
    ],
    {
        variants: {
            variant: {
                default: "",
                destructive: "ring-inline-error",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);
