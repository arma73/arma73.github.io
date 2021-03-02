import { FC, useEffect, useMemo } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ReactPortal from "_components/portal";
import { move } from "./move";
import { RoutePage } from "_settings/path.routes";
import { equalsPath } from "_utils/equals";
import Icon3DHome from "_theme/icons/3d-house.svg";
import { LinkButton } from "_components/links";
import Icon3DPilled from "_theme/icons/piled-files.svg";
import IconProfile from "_theme/icons/profile-user.svg";

import "./Navigation.scss";

interface NavigationProps {
    "theme"?: "dark" | "light";
    "sizeIcons"?: string;
}

const Navigation: FC<NavigationProps & RouteComponentProps> = ({
    theme = "light",
    location,
    sizeIcons = "15px",
}) => {
    const listBubbles = useMemo(
        () => [
            {
                "Icon": Icon3DHome,
                "to": RoutePage.MAIN,
                "color": "#ffcc80",
                "count": 1,
            },
            {
                "Icon": IconProfile,
                "to": RoutePage.ABOUTME,
                "color": "#c5e1a5",
                "count": 2,
            },
            {
                "Icon": Icon3DPilled,
                "to": RoutePage.ARTICLES,
                "color": "#ce93d8",
                "count": 3,
            },
        ],
        []
    );

    useEffect(() => {
        const currentPath = equalsPath(location.pathname);

        for (const { to, color, count } of listBubbles) {
            if (to === currentPath) {
                move(count, color);
            }
        }
    }, [listBubbles, location.pathname]);

    const mapBubbles = () =>
        listBubbles.map(({ Icon, to, count }) => (
            <div id={`bubble${count}`} className="bubble" key={to}>
                <span className="icon">
                    <Icon width={sizeIcons} height={sizeIcons} />
                </span>
            </div>
        ));

    const mapMenuElements = () =>
        listBubbles.map(({ to, Icon, color, count }) => (
            <LinkButton
                key={to}
                id={`menu${count}`}
                to={to}
                className="menuElement"
                onClick={() => move(count, color)}
            >
                <Icon width={sizeIcons} height={sizeIcons} />
            </LinkButton>
        ));

    return (
        <ReactPortal className="navigation">
            <div id="navbarContainer">
                <div id="navbar">
                    <div id="bubbleWrapper">{mapBubbles()}</div>
                    <div id="menuWrapper">{mapMenuElements()}</div>
                </div>
                <div id="bgWrapper">
                    <div id="bg"></div>
                    <div id="bgBubble"></div>
                </div>
            </div>
        </ReactPortal>
    );
};

export default withRouter(Navigation);
