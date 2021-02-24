import { RiseAnimated } from "_components/animated";
import Square from "_components/shapes/square";

import "./Experience.scss";

const Experience = () => (
    <RiseAnimated toX="-4px" toY="-4px">
        <div className="experience">
            <Square className="connector" />
            <Square className="connector" />
            <Square />
        </div>
    </RiseAnimated>
);

export default Experience;
