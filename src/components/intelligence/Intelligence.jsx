import Section from "_components/form/Section";
import Personality from "_components/personality";
import Experience from "_components/experience";

import "./Intelligence.scss";

const Intelligence = () => (
    <Section className="intelligence">
        <Experience />
        <Personality />
    </Section>
);

export default Intelligence;
