import { useHover } from "_hooks/useHover";
import Section from "_components/form/Section";
import { RiseAnimated } from "_components/animated";
import Tooltip from "_components/tooltip";

import "./Skills.scss";

const Skills = () => {
    const [isHovered, bind] = useHover();

    return (
        <Section className="skills">
            <div className="box--skills" {...bind}>
                <RiseAnimated toX="-4px" toY="-4px">
                    <div className="circles">
                        <div className="circle-top preserve-3d"></div>
                        <div className="circle-top preserve-3d"></div>
                        <div className="circle-top"></div>
                    </div>
                </RiseAnimated>
            </div>
            <Tooltip show={isHovered} text="Skills" />
        </Section>
    );
};
export default Skills;
