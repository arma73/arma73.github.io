import { useState, useCallback, Dispatch, SetStateAction } from "react";

interface ToggleResponse {
    "isToggled": boolean;
    "setToggle": Dispatch<SetStateAction<boolean>>;
    "positiveToggle": Dispatch<SetStateAction<true>>;
    "negativeToggle": Dispatch<SetStateAction<false>>;
    "callToggle": () => void;
}

export const useToggle = (initialValue = false): ToggleResponse => {
    const [isToggled, setToggle] = useState(initialValue);

    const callToggle = useCallback(
        () => setToggle(prevState => !prevState),
        []
    );

    const positiveToggle = useCallback(() => setToggle(true), []);
    const negativeToggle = useCallback(() => setToggle(false), []);

    return { isToggled, setToggle, callToggle, positiveToggle, negativeToggle };
};
