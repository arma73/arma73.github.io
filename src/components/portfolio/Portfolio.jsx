import TopBar from "./topbar";
import AboutMe from "./aboutme";
import MountainPhoto from "./mountainphoto";
import BlogTower from "./blogtower";
import Summary from "./summary";
import StraightLine from "./straightline";
import Passions from "./passions";

import "./Portfolio.scss";
import "./Base.scss";

const Portfolio = () => (
    <div className="portfolio--layout">
        <div className="portfolio--illustration preserve-3d">
            <div className="portfolio">
                <TopBar />
                <AboutMe />
                <MountainPhoto />
                <BlogTower />
                <Summary />
                <StraightLine />
                <Passions />
            </div>
        </div>
    </div>
);

export default Portfolio;
