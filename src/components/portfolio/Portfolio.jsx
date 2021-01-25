import Container from "_components/container";
import Block from "_components/block";
import AboutMe from "_components/aboutme";
import BlogTower from "_components/blogtower";
import LineGroup from "_components/decorators/LineGroup";
import Passions from "_components/passions";
import Avatar from "_components/avatar";
import Packages from "_components/packages";
import Intelligence from "_components/intelligence";
import TopBar from "_components/topbar";
import Social from "_components/social";

import "./Portfolio.scss";

const Portfolio = () => (
    <div className="portfolio--layout center">
        <div className="portfolio--box">
            <div className="portfolio--illustration preserve-3d">
                <div className="portfolio">
                    <TopBar />
                    <Social />
                    <Container className="portfolio--container row">
                        <Block className="portfolio--block col col-md-1">
                            <AboutMe />
                            <BlogTower />
                            <LineGroup />
                            <Passions />
                        </Block>
                        <Block className="portfolio--block col col-md-2">
                            <Avatar />
                            <Packages />
                            <Intelligence />
                        </Block>
                    </Container>
                </div>
            </div>
        </div>
    </div>
);
export default Portfolio;
