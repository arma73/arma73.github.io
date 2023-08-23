import { forwardRef } from "react";
import { Viewport } from "@radix-ui/react-toast";
import { cn } from "@lib/utils";

import type { ElementRef, ComponentPropsWithoutRef } from "react";

const ToastViewport = forwardRef<
    ElementRef<typeof Viewport>,
    ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
    <Viewport
        ref={ref}
        className={cn(
            "fixed top-3 z-[60] flex max-h-screen w-full flex-col-reverse px-6 py-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col sm:px-4 sm:py-4 md:max-w-[420px]",
            className
        )}
        {...props}
    />
));
ToastViewport.displayName = Viewport.displayName;

export default ToastViewport;
