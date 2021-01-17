import "./BlogTower.scss";

const BlogTower = () => (
    <div className="square-tower">
        <div className="play-box preserve-3d">
            <div className="play-box__top-bar"></div>
            <a className="overflow-hidden inline-block" href=".">
                <div className="play-box__play-icon"></div>
            </a>
        </div>
        <div className="play-box__square-1 preserve-3d"></div>
        <div className="play-box__square-2 preserve-3d"></div>
        <div className="play-box__square-bottom"></div>
    </div>
);

export default BlogTower;
