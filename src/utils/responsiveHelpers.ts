import { MediaState } from "_context/MediaContext";
import { DisplayBreakpoints } from "_settings/breakpoint";

type KeysDisplayBreakpoints = keyof typeof DisplayBreakpoints;

type OptionCompliance = {
    [key in KeysDisplayBreakpoints]?: string;
} & {
    "defaultClass"?: string;
    "defaultBreakpointName"?: KeysDisplayBreakpoints;
};

/**
 * Returns a string of classes that match / are adjacent to the current breakpoint.
 *
 * @example
 * - setClass({ "default": "center", "mobileLg": "right" }, breakpoint);
 *
 * @return {string}                         Returns class string that matches correct breakpoint.
 */
export const setClass = (compliance: OptionCompliance, state: MediaState) => {
    // including the "default" key in the classObj is optional,
    // if its not provided it will be set to an empty string.
    const {
        defaultBreakpointName = "DESKTOP_MD",
        defaultClass = "",
    } = compliance;

    // if default is the current breakpoint, we simply return
    // the class strings that pair with the default key
    if (state.breakpoint === defaultBreakpointName) return defaultClass;

    // We now compare the breakpoint.name (the currently active breakpoint) against each key in the
    // "breakpoints" object (created in step 2), and return the first matched pair.
    const breakpointsName = (Object.keys(
        DisplayBreakpoints
    ) as KeysDisplayBreakpoints[]).reverse();

    const startingIndex = breakpointsName.indexOf(
        state.breakpoint as KeysDisplayBreakpoints
    );

    const firstMatchedKey =
        breakpointsName.slice(startingIndex).find(key => compliance[key]) ||
        defaultBreakpointName;

    return compliance[firstMatchedKey];
};

/**
 * Returns a boolean indicating whether or not the currentBreakpointSize
 * value is greater than the passed breakpointToCompare value.
 *
 * @return {boolean}                             Returns boolean that indicates whether the passed
 *                                               breakpointToCompare is currently greater than
 *                                               the currentBreakpointSize
 */
export const breakpointIsGreaterThan = (
    breakpointToCompare: KeysDisplayBreakpoints,
    currentBreakpointSize: number
) => currentBreakpointSize > DisplayBreakpoints[breakpointToCompare];

/**
 * Returns a boolean indicating whether or not the currentBreakpointSize
 * value is less than the passed breakpointToCompare value.
 *
 * @return {boolean}                             Returns boolean that indicates whether the passed
 *                                               breakpointToCompare is currently less than the
 *                                               currentBreakpointSize
 */
export const breakpointIsLessThan = (
    breakpointToCompare: KeysDisplayBreakpoints,
    currentBreakpointSize: number
) => currentBreakpointSize <= DisplayBreakpoints[breakpointToCompare];
