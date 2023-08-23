"use client";

import { useEffect, useState } from "react";
import {
    initialToasterState,
    toasterListeners,
    dispatchToasterAction,
    ToasterActionTypes,
} from "./state";

import type { ToastNotificationProps, IToasterState } from "./state";

let toastCounter = 0;

/**
 * Generates a unique ID for a toast notification.
 * @returns A unique ID.
 */
function generateToastId(): string {
    toastCounter = (toastCounter + 1) % Number.MAX_SAFE_INTEGER;
    return `toast_${toastCounter}`;
}

/**
 * Represents the structure of a toast notification without the 'id' property.
 */
interface IToastOptions extends Omit<ToastNotificationProps, "id"> {}

/**
 * Displays a toast notification.
 * @param options - The options for the toast notification.
 * @returns An object with the ID of the created toast and a function to dismiss it.
 */
function showToast(options: IToastOptions) {
    const toastId = generateToastId();

    const dismiss = () =>
        dispatchToasterAction({
            type: ToasterActionTypes.DISMISS,
            toastId,
        });

    dispatchToasterAction({
        type: ToasterActionTypes.ADD,
        toast: {
            ...options,
            id: toastId,
            open: true,
            onOpenChange: (open: boolean) => {
                if (!open) dismiss();
            },
        },
    });

    return {
        id: toastId,
        dismiss,
    };
}

/**
 * Custom hook for managing toast notifications.
 * @returns An object containing the current toaster state and functions for showing and dismissing toasts.
 */
function useToast() {
    const [state, setState] = useState<IToasterState>(initialToasterState);

    useEffect(() => {
        // Add the state setter function to the toaster listeners.
        toasterListeners.push(setState);

        // Remove the state setter function when the component unmounts.
        return () => {
            const index = toasterListeners.indexOf(setState);
            if (index > -1) {
                toasterListeners.splice(index, 1);
            }
        };
    }, []);

    return {
        ...state,
    };
}

export { useToast, showToast };
