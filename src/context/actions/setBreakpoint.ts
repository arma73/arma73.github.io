import { BreakpointTypes } from "../types";
import { Actions } from "_interfaces/store.interface";

export interface PayloadActiveBreakpoint {
    "breakpointName": string;
    "breakpointSize": number;
}

interface ActionActiveBreakpoint
    extends Actions<
        BreakpointTypes.SET_ACTIVE_BREAKPOINT,
        PayloadActiveBreakpoint
    > {}

/**
 * @description Changes the active breakpoint.
 */
export const setActiveBreakpoint = (
    breakpointName: string,
    breakpointSize: number
): ActionActiveBreakpoint => ({
    "type": BreakpointTypes.SET_ACTIVE_BREAKPOINT,
    "payload": {
        breakpointName,
        breakpointSize,
    },
});
