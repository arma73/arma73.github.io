import { useToggle } from "_hooks/useToggle";
import { ShowEducation } from "_components/showcase";
import StraightLine from "_components/straightline";
import Tooltip from "_components/tooltip";
import { useHover } from "_hooks/useHover";

import "./Education.scss";

const Education = () => {
    const [isHovered, bind] = useHover();
    const { isToggled, negativeToggle, positiveToggle } = useToggle();

    return (
        <>
            <div className="education" {...bind} onClick={positiveToggle}>
                <StraightLine
                    options={{
                        "short": true,
                    }}
                    lines={4}
                />
                <Tooltip show={isHovered} text="Education" />
            </div>
            <ShowEducation visible={isToggled} onClose={negativeToggle} />
        </>
    );
};

export default Education;
