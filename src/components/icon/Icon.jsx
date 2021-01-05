import clsx from "clsx";
import { useHover } from "_hooks";
import { range } from "_utils/range";

import "./Icon.scss";

const Icon = ({ depth = 50, theme = "light" }) => {
    const [isHovered, bind] = useHover();

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
                    className={clsx(
                        "icon__figure",
                        `icon__figure--${theme}`,
                        {
                            "figure--gold": isHovered,
                        }
                    )}
                    {...bind}
                >
                    {getRings()}
                </figure>
            </div>
        </div>
    );
};

export default Icon;
