/* eslint-disable max-lines */
import type { ReactNode } from "react";
import type { ToastProps, ToastActionElement } from "./Toast";

/**
 * Represents the structure of a single toast notification.
 */
export type ToastNotificationProps = ToastProps & {
    id: string;
    title?: ReactNode;
    description?: ReactNode;
    action?: ToastActionElement;
};

/**
 * Represents the state of the toaster component.
 */
export interface IToasterState {
    toasts: Array<ToastNotificationProps>;
}

/**
 * The initial state of the toaster.
 */
export let initialToasterState: IToasterState = { toasts: [] };

/**
 * List of listeners to be notified when the toaster state changes.
 */
export const toasterListeners: Array<(state: IToasterState) => void> = [];

/**
 * Dispatches actions to modify the toaster state.
 * @param action - The action to be dispatched.
 */
export const dispatchToasterAction = (action: ToasterAction) => {
    initialToasterState = toasterReducer(initialToasterState, action);
    toasterListeners.forEach(listener => {
        listener(initialToasterState);
    });
};

/**
 * Enum representing different toaster action types.
 */
export enum ToasterActionTypes {
    ADD,
    DISMISS,
    REMOVE,
}

/**
 * Union type for all possible toaster actions.
 */
type ToasterAction =
    | {
          type: ToasterActionTypes.ADD;
          toast: ToastNotificationProps;
      }
    | {
          type: ToasterActionTypes.DISMISS;
          toastId?: string;
      }
    | {
          type: ToasterActionTypes.REMOVE;
          toastId?: string;
      };

/**
 * Reducer function to handle toaster state changes.
 * @param state - The current state of the toaster.
 * @param action - The action to be performed.
 * @returns The new state of the toaster.
 */
export const toasterReducer = (
    state: IToasterState,
    action: ToasterAction
): IToasterState => {
    switch (action.type) {
        case ToasterActionTypes.ADD:
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, 1),
            };

        case ToasterActionTypes.REMOVE:
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: [],
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter(t => t.id !== action.toastId),
            };
        case ToasterActionTypes.DISMISS: {
            const { toastId } = action;

            return {
                ...state,
                toasts: state.toasts.map(t =>
                    t.id === toastId || toastId === undefined
                        ? {
                              ...t,
                              open: false,
                          }
                        : t
                ),
            };
        }
        default: {
            return state;
        }
    }
};
