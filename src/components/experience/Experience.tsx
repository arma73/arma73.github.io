import { useHistory } from "react-router-dom";
import { RiseAnimated } from "_components/animated";
import { RoutePage } from "_settings/path.routes";
import Square from "_components/shapes/square";

import "./Experience.scss";

const Experience = () => {
    const history = useHistory();

    const handleRoute = () => history.push(RoutePage.EXPERIENCE);

    return (
        <RiseAnimated toX="-4px" toY="-4px">
            <div className="experience" onClick={handleRoute}>
                <Square className="connector" />
                <Square className="connector" />
                <Square />
            </div>
        </RiseAnimated>
    );
};

export default Experience;
