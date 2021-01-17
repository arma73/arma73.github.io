import Bar from "./bar";

import "./Portfolio.scss";

const Portfolio = () => (
    <div className="portfolio--layout">
        <div className="portfolio--illustration preserve-3d">
            <div className="portfolio">
                <Bar />
            </div>
        </div>
    </div>
);

export default Portfolio;
