import { useState } from "react";
import { range } from "_utils/range";

import "./Icon.scss";

const Icon = ({ depth = 50 }) => {
    const [theme, setTheme] = useState("");

    const getRings = () => [...range(4, 96, 40)].map((rotation, index) => (
        <section
            key={rotation}
            className="figure__ring"
            style={{ 
                "transform": `rotateY(${rotation}deg)`, 
                "animationDelay": `${index * 0.1}s`,
            }}  
        />
    ));

    return (
        <div 
            className="icon__block"
            style={{
                "width": `${depth}px`,
                "height": `${depth}px`,
            }}
        >
            <div className="icon__combine">
                <figure 
                    className={`icon__figure icon__figure--${theme}`}
                    onMouseEnter={() => setTheme("gold")}
                    onMouseLeave={() => setTheme("")}
                >
                    {getRings()}
                </figure>
            </div>
        </div>
    );
};

export default Icon;
