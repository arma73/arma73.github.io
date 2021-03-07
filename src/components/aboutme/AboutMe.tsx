import { Link, useLocation } from "react-router-dom";
import { RoutePage } from "_settings/path.routes";
import { useHover } from "_hooks/useHover";
import Section from "_components/form/Section";
import StraightLine from "_components/straightline";
import Tooltip from "_components/tooltip";

import "./AboutMe.scss";

const AboutMe = () => {
    const location = useLocation();
    const [isHovered, bind] = useHover();

    return (
        <Section className="aboutme">
            <Link
                to={{
                    "pathname": RoutePage.ABOUTME,
                    "state": { "showcase": location },
                }}
            >
                <div className="box--aboutme" {...bind}>
                    <h3 className="title">A</h3>
                    <StraightLine
                        options={{
                            "fill": true,
                            "short": true,
                        }}
                        lines={5}
                    />
                </div>
            </Link>
            <Tooltip show={isHovered} text="About me" />
        </Section>
    );
};
export default AboutMe;
