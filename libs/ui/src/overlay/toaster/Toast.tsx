"use client";

import { forwardRef } from "react";
import { Provider, Root, Action } from "@radix-ui/react-toast";
import { Panel } from "../../containers";
import { cn } from "@lib/utils";
import ToastViewport from "./components/ToastViewport";
import ToastTitle from "./components/ToastTitle";
import ToastDescription from "./components/ToastDescription";
import { toastVariants } from "./components/variants";

import type { ElementRef, ComponentPropsWithoutRef, ReactElement } from "react";
import type { ToastVariantTypes } from "./components/variants";

const ToastProvider = Provider;

const Toast = forwardRef<
    ElementRef<typeof Root>,
    ComponentPropsWithoutRef<typeof Root> & ToastVariantTypes
>(({ className, children, variant, ...props }, ref) => {
    return (
        <Root asChild ref={ref} {...props}>
            <Panel className={cn(toastVariants({ variant }), className)}>
                {children}
            </Panel>
        </Root>
    );
});
Toast.displayName = Root.displayName;

const ToastAction = forwardRef<
    ElementRef<typeof Action>,
    ComponentPropsWithoutRef<typeof Action>
>(({ className, ...props }, ref) => (
    <Action
        ref={ref}
        className={cn(
            "shrink-0 rounded-md text-sm font-medium",
            "bg-transparent ring-consistent ring-1 hover:opacity-40",
            "disabled:pointer-events-none disabled:opacity-50",
            className
        )}
        {...props}
    />
));
ToastAction.displayName = Action.displayName;

type ToastProps = ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = ReactElement<typeof ToastAction>;

export {
    type ToastProps,
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastAction,
    ToastDescription,
    ToastActionElement,
};
