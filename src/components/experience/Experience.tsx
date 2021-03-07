import { useHistory } from "react-router-dom";
import { useHover } from "_hooks/useHover";
import { RiseAnimated } from "_components/animated";
import { RoutePage } from "_settings/path.routes";
import Square from "_components/shapes/square";
import Tooltip from "_components/tooltip";

import "./Experience.scss";

const Experience = () => {
    const history = useHistory();
    const [isHovered, bind] = useHover();

    const handleRoute = () => history.push(RoutePage.EXPERIENCE);

    return (
        <div className="experience">
            <div {...bind} onClick={handleRoute}>
                <RiseAnimated toX="-4px" toY="-4px">
                    <div className="experience-shapes">
                        <Square className="connector" />
                        <Square className="connector" />
                        <Square />
                    </div>
                </RiseAnimated>
            </div>
            <Tooltip show={isHovered} text="Experience" />
        </div>
    );
};

export default Experience;
