import { forwardRef } from "react";
import { Title as RadixTitle } from "@radix-ui/react-toast";
import { Title } from "../../../typography";

import type { ElementRef, ComponentPropsWithoutRef } from "react";

const ToastTitle = forwardRef<
    ElementRef<typeof RadixTitle>,
    ComponentPropsWithoutRef<typeof RadixTitle>
>(({ children, ...props }, ref) => (
    <RadixTitle asChild ref={ref} {...props}>
        <Title level={4}>{children}</Title>
    </RadixTitle>
));
ToastTitle.displayName = RadixTitle.displayName;

export default ToastTitle;
