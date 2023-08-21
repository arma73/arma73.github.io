import type { FC } from "react";
import type { IconProps } from "../_types";

const GatsbyIcon: FC<IconProps> = props => {
    return (
        <svg
            viewBox="0 0 15 15"
            aria-label="Gatsby JS"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 3.35786 3.35786 0 7.5 0 11.6421 0 15 3.35786 15 7.5c0 4.1421-3.3579 7.5-7.5 7.5C3.35786 15 0 11.6421 0 7.5Zm3.30472-1.63135C3.95815 4.18936 5.5908 3 7.50006 3c1.25893 0 2.39637.51632 3.21364 1.35002l.7141-.70004C10.4302 2.63232 9.03852 2 7.50006 2 5.0366 2 2.95264 3.61922 2.25194 5.85017l-.09081.28911 6.69965 6.69962.2891-.0908c2.06302-.6479 3.60262-2.4782 3.82302-4.6987l.0546-.5494H9.00006v1h2.88854c-.3324 1.46491-1.3802 2.6595-2.7572 3.1953L3.30472 5.86865Zm2.84176 6.98495-4-4.00001.70711-.70711 4 4.00002-.70711.7071Z"
            />
        </svg>
    );
};

export default GatsbyIcon;