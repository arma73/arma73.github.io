import { memo } from "react";
import { useHover } from "_hooks/useHover";
import { useToggle } from "_hooks/useToggle";
import { RiseAnimated } from "_components/animated";
import ShowPassions from "_components/showcase/sh_passions";
import Section from "_components/form/Section";
import Tooltip from "_components/tooltip";

import "./Passions.scss";

const Passions = () => {
    const [isHovered, bind] = useHover();
    const { isToggled, negativeToggle, positiveToggle } = useToggle();

    return (
        <>
            <Section className="passions">
                <div
                    className="box--passions"
                    onClick={positiveToggle}
                    {...bind}
                >
                    <RiseAnimated toX="-4px" toY="-4px">
                        <div className="bar--passions" />
                    </RiseAnimated>
                </div>
                <Tooltip show={isHovered} text="Passions" />
            </Section>
            <ShowPassions onClose={negativeToggle} visible={isToggled} />
        </>
    );
};

export default memo(Passions);
