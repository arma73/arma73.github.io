import Container from "_components/container";
import Block from "_components/block";
import AboutMe from "_components/aboutme";
import ArticlesTower from "_components/articlestower";
import LineGroup from "_components/decorators/LineGroup";
import Passions from "_components/passions";
import Avatar from "_components/avatar";
import Packages from "_components/packages";
import Intelligence from "_components/intelligence";
import TopBar from "_components/topbar";
import Skills from "_src/components/skills";

import "./Portfolio.scss";

const Portfolio = () => (
    <div className="portfolio--layout center">
        <div className="portfolio--box">
            <div className="portfolio--illustration preserve-3d">
                <div className="portfolio">
                    <TopBar />
                    <Skills />
                    <Container className="portfolio--container row">
                        <Block className="portfolio--block col col-md-1">
                            <AboutMe />
                            <ArticlesTower />
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
