import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";

import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

export type PanelVariantProps = VariantProps<typeof panelVariants>;
const panelVariants = cva("", {
    variants: {
        vsize: {
            sm: "p-4 rounded-xl",
            md: "p-6 rounded-2xl",
        },
        vtype: {
            bordered: `
          shadow-lg shadow-consistent/5
          ring-1 ring-consistent
        `,
        },
    },
});

type PanelProps = PanelVariantProps & HTMLAttributes<HTMLDivElement>;

const Panel = forwardRef<HTMLDivElement, PanelProps>(function PanelRef(
    { className, children, vsize = "md", vtype = "bordered", ...rest },
    externalRef
) {
    return (
        <div
            ref={externalRef}
            className={cn(panelVariants({ vsize, vtype }), className)}
            {...rest}>
            {children}
        </div>
    );
});

export default Panel;
