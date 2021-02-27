import { useHover } from "_hooks/useHover";
import Section from "_components/form/Section";
import { RiseAnimated } from "_components/animated";
import Tooltip from "_components/tooltip";

import "./Social.scss";

const Social = () => {
    const [isHovered, bind] = useHover();

    return (
        <Section className="social">
            <div className="box--social" {...bind}>
                <RiseAnimated toX="-4px" toY="-4px">
                    <div className="circles">
                        <div className="circle-top preserve-3d"></div>
                        <div className="circle-top preserve-3d"></div>
                        <div className="circle-top"></div>
                    </div>
                </RiseAnimated>
            </div>
            <Tooltip show={isHovered} text="Social" />
        </Section>
    );
};
export default Social;
