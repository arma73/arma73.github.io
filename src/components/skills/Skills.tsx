import { memo } from "react";
import { useHover } from "_hooks/useHover";
import { useToggle } from "_hooks/useToggle";
import Section from "_components/form/Section";
import { ShowSkills } from "_components/showcase";
import { RiseAnimated } from "_components/animated";
import Tooltip from "_components/tooltip";

import "./Skills.scss";

const Skills = () => {
    const [isHovered, bind] = useHover();
    const { isToggled, negativeToggle, positiveToggle } = useToggle();

    return (
        <>
            <Section className="skills">
                <div className="box--skills" {...bind}>
                    <RiseAnimated toX="-4px" toY="-4px">
                        <div className="circles" onClick={positiveToggle}>
                            <div className="circle-top preserve-3d"></div>
                            <div className="circle-top preserve-3d"></div>
                            <div className="circle-top"></div>
                        </div>
                    </RiseAnimated>
                </div>
                <Tooltip show={isHovered} text="Skills" />
            </Section>
            <ShowSkills onClose={negativeToggle} visible={isToggled} />
        </>
    );
};

export default memo(Skills);
