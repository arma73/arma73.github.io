import { memo } from "react";
import Section from "_components/form/Section";
import CardPackage from "_components/cards/cardpackage";
import NpmSVG from "_theme/icons/skills/npm-logo.svg";
import { UnifiedLink } from "_components/links";

import "./Packages.scss";

const Packages = () => (
    <Section className="packages">
        <UnifiedLink
            to={"https://www.npmjs.com/package/m-head"}
            target="_blank"
        >
            <CardPackage isAnimated={true} className="link--package">
                <NpmSVG className="npm-icon" />
            </CardPackage>
        </UnifiedLink>
        <CardPackage />
        <CardPackage />
    </Section>
);

export default memo(Packages);
