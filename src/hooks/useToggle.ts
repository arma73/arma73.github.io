import { useState, useCallback, Dispatch, SetStateAction } from "react";

interface ToggleResponse {
    "isToggled": boolean;
    "setToggle": Dispatch<SetStateAction<boolean>>;
    "callToggle": () => void;
}

export const useToggle = (initialValue = false): ToggleResponse => {
    const [isToggled, setToggle] = useState(initialValue);

    const callToggle = useCallback(
        () => setToggle(prevState => !prevState),
        []
    );

    return { isToggled, setToggle, callToggle };
};
