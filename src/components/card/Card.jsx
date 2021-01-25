import { RiseAnimated } from "_components/animated";
import StraightLine from "_components/straightline";
import Circle from "_components/shapes/circle";

import "./Card.scss";

const Card = () => (
    <div className="card">
        <RiseAnimated
            toX="-4px"
            toY="-4px"
        >
            <div className="card-column">
                <Circle />
                <StraightLine />
            </div>
        </RiseAnimated>
    </div >
);

export default Card;
