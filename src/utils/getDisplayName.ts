import { ComponentType } from "react";

/**
 * To ease debugging, choose a display name that communicates that it’s the result of a HOC.
 */
export const getDisplayName = <P extends ObjectOf<P>>(
    WrappedComponent: ComponentType<P>
): string =>
    WrappedComponent.displayName || WrappedComponent.name || "Component";
