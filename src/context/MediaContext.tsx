import { Dispatch, FC } from "react";
import { createContext, useReducer, useContext } from "react";
import { mediaReducer, MediaReducerActions } from "./MediaReducer";
import { Reducer } from "_interfaces/store.interface";
import { DisplayBreakpoints } from "_settings/breakpoint";

export interface MediaState {
    "breakpoint": keyof typeof DisplayBreakpoints;
    "size": number;
}

const initialState: MediaState = {
    "breakpoint": "DESKTOP_MD",
    "size": DisplayBreakpoints.MOBILE_MD,
};

export interface MediaContextResponse {
    "state": MediaState;
    "dispatch": Dispatch<MediaReducerActions>;
}

export const MediaContext = createContext<MediaContextResponse>({
    "state": initialState,
    "dispatch": () => null,
});

const mainReducer: Reducer<MediaState, MediaReducerActions> = (state, action) =>
    mediaReducer(state, action);

export const MediaProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <MediaContext.Provider value={{ state, dispatch }}>
            {children}
        </MediaContext.Provider>
    );
};

export const useMediaContext = () => useContext(MediaContext);
