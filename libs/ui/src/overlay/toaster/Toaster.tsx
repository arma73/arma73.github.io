"use client";

import {
    Toast,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "./Toast";
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
