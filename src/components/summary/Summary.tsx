import StraightLine from "_components/straightline";

import "./Summary.scss";

const Summary = () => (
    <div className="summary">
        <StraightLine
            options={{
                "short": true,
            }}
            lines={4}
        />
    </div>
);

export default Summary;
