import type { FC } from "react";
import type { IconProps } from "../_types";

const HTMLIcon: FC<IconProps> = props => {
    return (
        <svg
            viewBox="-1 0 20 20"
            aria-label="HTML"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path d="M14.4350881 6H5.8119794l.2060407 2h8.2120473c-.1203604 1.752-.4845016 5.464-.618122 7.153L8.99949 16.451v.004l-.0102.005-4.61551542-1.624L4.05757353 11H6.3199411l.1601405 2.063L8.99337 14h.00612l2.5092084-.9.2580608-3.1H3.95659319c-.03774013-.401-.52326175-5.608-.60792203-6H14.6370488c-.0632402.66-.1275004 1.338-.2019607 2ZM0 0l1.63812546 18.148L8.98929 20l7.3705445-1.889L18 0H0Z" />
        </svg>
    );
};

export default HTMLIcon;
