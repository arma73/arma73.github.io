import { BreakpointTypes } from "../types";
import { Action } from "_interfaces/store.interface";
import { DisplayBreakpoints } from "_settings/breakpoint";

export interface PayloadActiveBreakpoint {
    "breakpointName": keyof typeof DisplayBreakpoints;
    "breakpointSize": number;
}

export type ActionActiveBreakpoint = Action<
    BreakpointTypes.SET_ACTIVE_BREAKPOINT,
    PayloadActiveBreakpoint
>;

/**
 * @description Changes the active breakpoint.
 */
export const setActiveBreakpoint = (
    breakpointName: PayloadActiveBreakpoint["breakpointName"],
    breakpointSize: PayloadActiveBreakpoint["breakpointSize"]
): ActionActiveBreakpoint => ({
    "type": BreakpointTypes.SET_ACTIVE_BREAKPOINT,
    "payload": {
        breakpointName,
        breakpointSize,
    },
});
