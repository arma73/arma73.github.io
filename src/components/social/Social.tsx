import { RiseAnimated } from "_components/animated";
import { useHover } from "_hooks/useHover";
import Tooltip from "_components/tooltip";

import "./Social.scss";

const Social = () => {
    const [isHovered, bind] = useHover();

    return (
        <div className="social" {...bind}>
            <RiseAnimated toX="-4px" toY="-4px">
                <div className="social-block" />
            </RiseAnimated>
            <Tooltip show={isHovered} text="Social" />
        </div>
    );
};

export default Social;
