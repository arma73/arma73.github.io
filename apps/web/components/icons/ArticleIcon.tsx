import type { FC } from "react";
import type { IconProps } from "./_types";

const ArticleIcon: FC<IconProps> = props => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v11.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                fillOpacity=".16"
                strokeWidth="1.5"
                strokeMiterlimit="10"
            />
            <path
                d="M8 12h8m-8 3h4M8 9h8"
                className="stroke-zinc-400 dark:stroke-zinc-500"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ArticleIcon;
