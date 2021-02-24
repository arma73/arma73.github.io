import { useState, useCallback } from "react";

export const useToggle = (initialValue = false) => {
    const [isToggled, setToggle] = useState(initialValue);

    const callToggle = useCallback(
        () => setToggle(prevState => !prevState),
        []
    );

    // Named properties, no order in return
    return { isToggled, setToggle, callToggle };
};
