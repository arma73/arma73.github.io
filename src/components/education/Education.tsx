import StraightLine from "_components/straightline";
import Tooltip from "_components/tooltip";
import { useHover } from "_hooks/useHover";

import "./Education.scss";

const Education = () => {
    const [isHovered, bind] = useHover();

    return (
        <div className="education" {...bind}>
            <StraightLine
                options={{
                    "short": true,
                }}
                lines={4}
            />
            <Tooltip show={isHovered} text="Education" />
        </div>
    );
};

export default Education;
