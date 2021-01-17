import TopBar from "./topbar";
import AboutMe from "./aboutme";

import "./Portfolio.scss";
import "./Base.scss";

const Portfolio = () => (
    <div className="portfolio--layout">
        <div className="portfolio--illustration preserve-3d">
            <div className="portfolio">
                <TopBar />
                <AboutMe />
            </div>
        </div>
    </div>
);

export default Portfolio;
