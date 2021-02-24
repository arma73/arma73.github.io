import { Link } from "react-router-dom";
import clsx from "clsx";
import { useHover } from "_hooks";
import { ARTICLES_PAGE_ROUTE } from "_settings/path.routes";
import Section from "_components/form/Section.jsx";
import Tooltip from "_components/tooltip";

import "./ArticlesTower.scss";

const ArticlesTower = () => {
    const [isHovered, bind] = useHover();

    return (
        <Section className="tower--articles">
            <div className="box--articles">
                <Link
                    to={ARTICLES_PAGE_ROUTE}
                    className="layer preserve-3d"
                    {...bind}
                >
                    <div className="layer__top-bar" />
                </Link>
                <div
                    className={clsx("layer__square-1", "preserve-3d", {
                        "square-1__hovered": isHovered,
                    })}
                />
                <div
                    className={clsx("layer__square-2", "preserve-3d", {
                        "square-2__hovered": isHovered,
                    })}
                />
                <div className="layer__square-bottom" />
            </div>
            <Tooltip show={isHovered} text="Articles" />
        </Section>
    );
};

export default ArticlesTower;
