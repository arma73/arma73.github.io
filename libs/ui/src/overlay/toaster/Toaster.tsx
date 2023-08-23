"use client";

import { Toast, ToastProvider } from "./Toast";
import ToastViewport from "./components/ToastViewport";
import ToastTitle from "./components/ToastTitle";
import ToastDescription from "./components/ToastDescription";
import { useToast } from "./useToast";

const Toaster = () => {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                variant,
                action,
                ...props
            }) {
                return (
                    <Toast
                        key={id}
                        className="flex flex-col"
                        variant={variant}
                        {...props}>
                        <div className="grid">
                            {title && (
                                <ToastTitle
                                    className={
                                        description || action ? "mb-3" : ""
                                    }>
                                    {title}
                                </ToastTitle>
                            )}
                            {description && (
                                <ToastDescription variant={variant}>
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
};

export default Toaster;
