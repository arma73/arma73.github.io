import { ReactNode } from "react";
import { createContext, useReducer, useContext } from "react";
import { BreakpointTypes } from "./types";
import { Actions } from "_interfaces/store.interface";
import { PayloadActiveBreakpoint } from "./actions";

interface MediaState {
    "name": string;
    "size": number | null;
}

const initialState: MediaState = {
    "name": "default",
    "size": null,
};

type ReducerActions = Actions<BreakpointTypes, PayloadActiveBreakpoint>;

const reducer = (
    state: MediaState,
    { type, payload }: ReducerActions
): MediaState => {
    switch (type) {
        case BreakpointTypes.SET_ACTIVE_BREAKPOINT:
            return {
                ...state,
                "name": payload.breakpointName,
                "size": payload.breakpointSize,
            };
        default:
            return state;
    }
};

export const MediaContext = createContext([{}, () => {}]);

export const MediaProvider = ({ children }: { "children": ReactNode }) => {
    const value = useReducer(reducer, initialState);

    return (
        <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
    );
};

export const useMediaContext = () => useContext(MediaContext);
