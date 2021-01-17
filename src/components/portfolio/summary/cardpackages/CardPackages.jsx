import Card from "./card";
import Column from "../column";

import "./CardPackages.scss";

const CardPackages = () => (
    <div className="card--packages">
        <Column>
            <Card />
        </Column>
        <Column>
            <Card />
        </Column>
        <Column>
            <Card />
        </Column>
    </div>
);

export default CardPackages;
