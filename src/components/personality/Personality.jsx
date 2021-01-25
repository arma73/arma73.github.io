import { RiseAnimated } from "_components/animated";
import Summary from "_components/summary";
import Skills from "_components/skills";

import "./Personality.scss";

const Personality = () => (
    <div className="personality">
        <RiseAnimated
            toX="-4px"
            toY="-4px"
        >
            <div className="box--personality">
                <Summary />
                <Skills />
            </div>
        </RiseAnimated>
    </div>
);
export default Personality;
