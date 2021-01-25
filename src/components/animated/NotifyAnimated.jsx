import { useTransition, config, animated } from "react-spring";
import NotifyBox from "_components/notifybox";

const NotifyAnimated = ({ list, skip, loading }) => {
    const listTransitions = useTransition(
        list,
        () => null,
        {
            "config": config.gentle,
            "from": { "opacity": 0, "transform": "translate3d(50%, 0px, 0px)" },
            "enter": { "opacity": 1, "transform": "translate3d(0%, 0px, 0px)" },
            "keys": list.map((item, index) => index),
        }
    );

    return listTransitions.map(styles => (
        <animated.div key={styles.key} style={styles} className="notifyBox">
            <NotifyBox skip={skip} loading={loading} />
        </animated.div>
    ));
};
export default NotifyAnimated;
