import { RiseAnimated } from "_components/animated";
import Summary from "_components/summary";
import Social from "_src/components/social";

import "./Personality.scss";

const Personality = () => (
    <div className="personality">
        <RiseAnimated toX="-4px" toY="-4px">
            <div className="box--personality">
                <Summary />
                <Social />
            </div>
        </RiseAnimated>
    </div>
);
export default Personality;
