import { RiseAnimated } from "_components/animated";
import Education from "_src/components/education";
import Social from "_src/components/social";

import "./Personality.scss";

const Personality = () => (
    <div className="personality">
        <RiseAnimated toX="-4px" toY="-4px">
            <div className="box--education">
                <Education />
            </div>
        </RiseAnimated>
        <Social />
    </div>
);

export default Personality;
