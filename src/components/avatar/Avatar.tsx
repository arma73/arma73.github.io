import Section from "_components/form/Section";
import AvatarSVG from "_theme/icons/logo-default.svg";

import "./Avatar.scss";

const Avatar = () => (
    <Section className="avatar">
        <div className="avatar-photo--box center">
            <AvatarSVG width="85px" height="86px" className="avatar-photo" />
            <div className="arrow-down" />
        </div>
    </Section>
);

export default Avatar;
