/* eslint-disable max-lines */
import { forwardRef, ReactNode, RefAttributes } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import withMediaQueryListener, {
    InjectedMediaQueryListenerProps,
} from "_hoc/withMediaQueryListener";
import { breakpointIsGreaterThan } from "_utils/responsiveHelpers";
import Saturn from "_components/ui/Saturn";
import StarsSVG from "_theme/icons/experience/stars.svg";
import EarthSVG from "_theme/icons/experience/earth.svg";
import CloudSVG from "_theme/icons/experience/cloud.svg";
import SatelliteSVG from "_theme/icons/experience/satellite.svg";
import ClientsModalSVG from "_theme/icons/experience/clients.svg";
import ServerSVG from "_theme/icons/experience/server.svg";

const StyledParallaxLayer = styled(ParallaxLayer).attrs(
    ({ opacity = 1, ...props }: { "opacity"?: number }) => ({
        ...props,
        opacity,
    })
)`
    opacity: ${({ opacity }) => opacity};
`;

export interface ParallaxScrollingProps
    extends InjectedMediaQueryListenerProps {
    "handleScrollTo"?: (count: 0 | 1 | 2) => void;
    "viewFirst": ReactNode;
    "viewSecond": ReactNode;
}

const ParallaxScrolling = forwardRef<Parallax, ParallaxScrollingProps>(
    function ParallaxComponent({ viewFirst, viewSecond, breakpoint }, ref) {
        return (
            <Parallax ref={ref} pages={3}>
                <StyledParallaxLayer offset={0} speed={0} factor={3}>
                    <StarsSVG width="100%" height="100%" />
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={1.3} speed={-0.3}>
                    <Saturn />
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={1} speed={0.8} opacity={0.1}>
                    <CloudSVG width="200px" style={{ "marginLeft": "55%" }} />
                    <CloudSVG width="100px" style={{ "marginLeft": "15%" }} />
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={1.75} speed={0.5} opacity={0.1}>
                    <CloudSVG width="200px" style={{ "marginLeft": "70%" }} />
                    <CloudSVG width="210px" style={{ "marginLeft": "40%" }} />
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={1} speed={0.2} opacity={0.2}>
                    <CloudSVG width="100px" style={{ "marginLeft": "10%" }} />
                    <CloudSVG width="200px" style={{ "marginLeft": "75%" }} />
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={1.6} speed={-0.1} opacity={0.4}>
                    <CloudSVG width="200px" style={{ "marginLeft": "60%" }} />
                    <CloudSVG width="240px" style={{ "marginLeft": "30%" }} />
                    <CloudSVG width="100px" style={{ "marginLeft": "80%" }} />
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={2.6} speed={0.4} opacity={0.6}>
                    <CloudSVG width="200px" style={{ "marginLeft": "5%" }} />
                    <CloudSVG width="150px" style={{ "marginLeft": "75%" }} />
                </StyledParallaxLayer>
                <ParallaxLayer offset={2.5} speed={-0.4}>
                    <div className="center" style={{ "height": "100%" }}>
                        <EarthSVG width="60%" />
                    </div>
                </ParallaxLayer>
                <StyledParallaxLayer offset={0} speed={-0.3}>
                    <SatelliteSVG
                        width="150px"
                        height="220px"
                        style={{ "marginLeft": "80%" }}
                    />
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={0} speed={-0.3}>
                    <div className="center" style={{ "height": "100%" }}>
                        <ClientsModalSVG width="90%" height="100%" />
                    </div>
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={0} speed={0.1}>
                    <div className="center" style={{ "height": "100%" }}>
                        {viewFirst}
                    </div>
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={1} speed={0.1}>
                    <div className="center" style={{ "height": "100%" }}>
                        {viewSecond}
                        {breakpointIsGreaterThan(
                            "MOBILE_MD",
                            breakpoint.size
                        ) ? (
                            <ServerSVG
                                width="20%"
                                height="40%"
                                style={{ "marginLeft": "25px" }}
                            />
                        ) : null}
                    </div>
                </StyledParallaxLayer>
                <StyledParallaxLayer offset={2} speed={-0}>
                    <div className="center" style={{ "height": "100%" }} />
                </StyledParallaxLayer>
            </Parallax>
        );
    }
);

export default withMediaQueryListener<
    ParallaxScrollingProps & RefAttributes<Parallax>
>(ParallaxScrolling);
