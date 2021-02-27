import Section from "_components/form/Section";
import CardPackage from "_components/cards/cardpackage";

import "./Packages.scss";

const Packages = () => (
    <Section className="packages">
        <CardPackage />
        <CardPackage />
        <CardPackage />
    </Section>
);

export default Packages;
