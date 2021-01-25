import { Link } from "react-router-dom";

import "./CardArticle.scss";

const CardArticle = () => (
    <article className="card--article">
        <header className="card__header">
            <div className="card__main-action" />
        </header>
        <div className="card__body">
            <div className="card__content">
                <Link to="/blog" className="card__title">
                    <h3 className="card__showmore">Web-application for designers</h3>
                </Link>
                <div className="card__description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, quisquam, cum,
                        praesentium error cumque voluptas ea architecto necessitatibus impedit quae autem minima
                        consequuntur sed dolor quas labore aut asperiores maxime saepe expedita iusto libero at
                        officia rem sunt. Accusamus, quis?
                    </p>
                </div>
            </div>
        </div>
    </article>
);

export default CardArticle;
