import { UnifiedLink } from "_components/links";
import GithubSVG from "_theme/icons/social/github.svg";
import LinkedinSVG from "_theme/icons/social/linkedin.svg";
import TwitterSVG from "_theme/icons/social/twitter.svg";

import "./Social.scss";

const Social = () => (
    <div className="social">
        <div className="social-block">
            <UnifiedLink
                to="https://github.com/arma73"
                target="_blank"
                className="social-item"
            >
                <GithubSVG width="20px" height="20px" />
            </UnifiedLink>
            <UnifiedLink
                to="https://www.linkedin.com/in/arman-khilko/"
                target="_blank"
                className="social-item"
            >
                <LinkedinSVG width="20px" height="20px" />
            </UnifiedLink>
            <UnifiedLink
                to="https://twitter.com/_arma73"
                target="_blank"
                className="social-item"
            >
                <TwitterSVG width="20px" height="20px" />
            </UnifiedLink>
        </div>
    </div>
);

export default Social;
