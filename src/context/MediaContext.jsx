import { createContext, useReducer, useContext } from "react";
import * as types from "./types";

const initialState = {
    "name": "default",
    "size": null,
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case types.SET_ACTIVE_BREAKPOINT:
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

export const MediaProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);

    return (
        <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
    );
};

export const useMediaContext = () => useContext(MediaContext);
