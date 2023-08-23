import { forwardRef } from "react";
import { Description } from "@radix-ui/react-toast";
import { cn } from "@lib/utils";

import type {
    ElementRef,
    ComponentPropsWithoutRef,
    FC,
    ReactNode,
} from "react";
import type { ToastVariantTypes } from "./variants";

const StyledDescription: FC<
    { desc: Array<string> | ReactNode } & ToastVariantTypes
> = ({ desc, variant }) => {
    if (typeof desc === "string") {
        return (
            <span
                className={cn("text-sm", {
                    "text-inline-error": variant === "destructive",
                })}>
                {desc}
            </span>
        );
    }

    if (Array.isArray(desc)) {
        return (
            <ul className="space-y-1">
                {desc.map((item, idx) => (
                    <li className="flex gap-x-4" key={idx}>
                        <div className="relative flex h-6 w-6 flex-none items-center justify-center">
                            <div
                                className={cn(
                                    "h-1.5 w-1.5 rounded-full ring-1 ",
                                    {
                                        "bg-gray-100 ring-gray-300":
                                            variant === "default",
                                        "bg-[#fcbfbf3b] ring-inline-error":
                                            variant === "destructive",
                                    }
                                )}
                            />
                        </div>
                        <p className="flex-auto py-0.5 text-xs leading-5 text-typography-text-light">
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        );
    }

    return desc;
};

const ToastDescription = forwardRef<
    ElementRef<typeof Description>,
    ComponentPropsWithoutRef<typeof Description> & ToastVariantTypes
>(({ className, variant, children, ...props }, ref) => (
    <Description
        ref={ref}
        asChild
        className={cn("text-sm opacity-90", className)}
        {...props}>
        <StyledDescription variant={variant} desc={children} />
    </Description>
));
ToastDescription.displayName = Description.displayName;

export default ToastDescription;
