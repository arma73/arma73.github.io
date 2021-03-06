import StraightLine from "_components/straightline";

import "./Education.scss";

const Education = () => (
    <div className="education">
        <StraightLine
            options={{
                "short": true,
            }}
            lines={4}
        />
    </div>
);

export default Education;
