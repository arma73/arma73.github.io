import { BreakpointTypes } from "./types";
import { ActionActiveBreakpoint } from "./actions";
import { MediaState } from "./MediaContext";
import { Reducer } from "_interfaces/store.interface";

export type MediaReducerActions = ActionActiveBreakpoint;

export const mediaReducer: Reducer<MediaState, MediaReducerActions> = (
    state,
    { type, payload }
) => {
    switch (type) {
        case BreakpointTypes.SET_ACTIVE_BREAKPOINT:
            return {
                ...state,
                "breakpoint": payload.breakpointName,
                "size": payload.breakpointSize,
            };
        default:
            return state;
    }
};
