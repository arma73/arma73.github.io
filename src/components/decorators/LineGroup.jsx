import StraightLine from "_components/straightline";
import Section from "_components/form/Section";

const LineGroup = () => (
    <Section className="decorator-line">
        <Section
            className="decorators"
            style={{ "padding": "0px 55px 0px 25px" }}
        >
            <StraightLine
                options={{ "short": true }}
                line={3}
            />
        </Section>
    </Section>
);

export default LineGroup;
