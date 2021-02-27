import { useHover } from "_hooks/useHover";
import { RiseAnimated } from "_components/animated";
import Section from "_components/form/Section";
import Tooltip from "_components/tooltip";

import "./Passions.scss";

const Passions = () => {
    const [isHovered, bind] = useHover();

    return (
        <Section className="passions">
            <div className="box--passions" {...bind}>
                <RiseAnimated toX="-4px" toY="-4px">
                    <div className="bar--passions" />
                </RiseAnimated>
            </div>
            <Tooltip show={isHovered} text="Passions" />
        </Section>
    );
};

export default Passions;
