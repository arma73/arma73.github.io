import Experience from "../experience";
import Description from "./description";
import Skills from "./skills";

import "./Intelligence.scss";

const Intelligence = () => (
    <div className="block--intelligence">
        <Experience />
        <div className="personality">
            <Description />
            <Skills />
        </div>
    </div>
);

export default Intelligence;
