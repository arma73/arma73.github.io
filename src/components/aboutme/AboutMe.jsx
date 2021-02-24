import { useHover } from "_hooks";
import Section from "_components/form/Section";
import StraightLine from "_components/straightline";
import Tooltip from "_components/tooltip";

import "./AboutMe.scss";

const AboutMe = () => {
    const [isHovered, bind] = useHover();

    return (
        <Section className="aboutme">
            <div className="box--aboutme" {...bind}>
                <div className="title">A</div>
                <StraightLine
                    options={{
                        "fill": true,
                        "short": true,
                    }}
                    lines={5}
                />
            </div>
            <Tooltip show={isHovered} text="About me" />
        </Section>
    );
};
export default AboutMe;
