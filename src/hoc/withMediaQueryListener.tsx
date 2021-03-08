/* eslint-disable max-lines */
import {
    useEffect,
    useCallback,
    useMemo,
    ComponentType,
    ForwardRefExoticComponent,
    forwardRef,
} from "react";
import { setActiveBreakpoint } from "_context/actions";
import { useMediaContext, MediaState } from "_context/MediaContext";
import { DisplayBreakpoints } from "_settings/breakpoint";

interface ExpandMediaQueryList extends MediaQueryList {
    breakpoint: number;
    breakpointName: keyof typeof DisplayBreakpoints;
}

type ActiveQuery = null | ExpandMediaQueryList;

export interface InjectedMediaQueryListenerProps {
    "breakpoint": MediaState;
}

const withMediaQueryListener = <P extends InjectedMediaQueryListenerProps>(
    WrappedComponent: ComponentType<P> | ForwardRefExoticComponent<P>
): ForwardRefExoticComponent<any> =>
    /**
     * This component will house the event handler for your changing breakpoints, and will
     * also communicate with your store to report the active breakpoints on initial mount
     * as well as updating the store with the new breakpoint value as the window is resized.
     */
    forwardRef<any, any>(function MediaListener(props, externalRef) {
        const { "state": breakpointState, dispatch } = useMediaContext();
        const mediaQueryState = useMemo<ExpandMediaQueryList[]>(() => [], []);

        /**
         * Create the function that will prepare our breakpoint object for dispatch.
         */
        const dispatchActiveQuery = useCallback(() => {
            // Assuming a desktop first responsive system, the active breakpoint will
            // always be the smallest one that satisfies the media query. We use
            // reduce to travel down the matched media queries and return the smallest
            // item that matches. In the event no breakpoints match (such as when the
            // viewport is larger than our largest breakpoint), we return null
            const activeQuery: ActiveQuery | null = mediaQueryState.length
                ? mediaQueryState.reduce(
                      (prev, curr) =>
                          curr.matches
                              ? curr
                              : prev && prev.matches
                              ? prev
                              : null,
                      ([] as unknown) as ActiveQuery
                  )
                : null;

            // In the event null was returned by activeQuery, we substitute 'default',
            // which will be the active breakpoint when no other breakpoint is matched
            const breakpointName = activeQuery
                ? activeQuery.breakpointName
                : breakpointState.breakpoint;

            // We will also record the numerical value for the matched breakpoint as breakpointSize
            const breakpointSize =
                (activeQuery && activeQuery.breakpoint) ?? breakpointState.size;

            if (
                breakpointSize === breakpointState.size &&
                breakpointName === breakpointState.breakpoint
            ) {
                return;
            }

            // Now dispatch both values using the setActiveBreakpoint action
            dispatch(setActiveBreakpoint(breakpointName, breakpointSize));
        }, [
            breakpointState.breakpoint,
            breakpointState.size,
            dispatch,
            mediaQueryState,
        ]);

        useEffect(() => {
            /**
             * Create the function that will run each time the breakpoint is changed.
             */
            const breakpointChange = () => dispatchActiveQuery();

            // loop over our breakpoints object to create a media query
            // instance for each of our breakpoints
            const displaysName = Object.keys(
                DisplayBreakpoints
            ) as (keyof typeof DisplayBreakpoints)[];

            displaysName.forEach(key => {
                // create a new media query object using the window.matchMedia api.
                const query = window.matchMedia(
                    `(max-width: ${DisplayBreakpoints[key]}px)`
                ) as ExpandMediaQueryList;

                // add the breakpoint value to the media query object
                query.breakpoint = DisplayBreakpoints[key];

                // add the name
                query.breakpointName = key;

                // Attach the even listener to the query
                try {
                    // Chrome & Firefox
                    query.addEventListener("change", breakpointChange);
                } catch (error) {
                    try {
                        // Safari
                        query.addListener(breakpointChange);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // push this query to our mediaQueryState array, after the loops has run its
                // course, we will have an array that houses a mediaQuery object for each
                // breakpoint in our breakpoints object.
                mediaQueryState.push(query);
            });

            // run the function once on componentDidMount to
            // record the initial breakpoint state of our viewport
            dispatchActiveQuery();
        }, [dispatchActiveQuery, mediaQueryState]);

        return (
            <WrappedComponent
                {...(props as P)}
                ref={externalRef}
                breakpoint={breakpointState}
            />
        );
    });

export default withMediaQueryListener;
