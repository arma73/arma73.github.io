import type { FC } from "react";
import type { IconProps } from "../_types";

const GraphQLIcon: FC<IconProps> = props => {
    return (
        <svg
            viewBox="0 0 32 32"
            aria-label="GraphQL"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                transform="rotate(-59.999 11.0203523 13.12677906)"
                d="M-.43 12.534h22.901v1.187H-.43z"
            />
            <path d="M4.545 21.162h22.902v1.187H4.545z" />
            <path
                transform="rotate(-59.999 11.02309873 24.62236966)"
                d="M10.43 18.008h1.187v13.227H10.43z"
            />
            <path
                transform="rotate(-59.999 20.97423269 7.38415263)"
                d="M20.381.771h1.187v13.227h-1.187z"
            />
            <path
                transform="rotate(-30.001 11.02597367 7.38037008)"
                d="M4.412 6.787h13.227v1.187H4.412z"
            />
            <path
                transform="rotate(-30.001 20.9815133 13.1279489)"
                d="M20.389 1.677h1.187v22.901h-1.187z"
            />
            <path d="M5.454 9.386h1.187v13.228H5.454zM25.36 9.386h1.187v13.228H25.36z" />
            <path
                transform="rotate(-30.001 20.97326231 24.61539064)"
                d="M15.222 24.097h11.504v1.037H15.222z"
            />
            <path d="M28.12 23a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 28.12 23M8.2 11.5a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 8.2 11.5M3.88 23a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 3.88 23M23.8 11.5a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 23.8 11.5M16 30a2.5 2.5 0 1 1 2.5-2.5A2.493 2.493 0 0 1 16 30M16 6.991a2.5 2.5 0 1 1 2.5-2.5 2.493 2.493 0 0 1-2.5 2.5" />
        </svg>
    );
};

export default GraphQLIcon;
