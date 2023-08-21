import type { FC } from "react";
import type { IconProps } from "../_types";

const TSIcon: FC<IconProps> = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="TypeScript"
            viewBox="0 0 5120 5120"
            {...props}>
            <path d="M 123 5110 c -46 -11 -80 -35 -100 -73 -17 -30 -18 -156 -18 -2477 0 -2441 0 -2445 20 -2480 12 -19 36 -43 55 -55 35 -20 39 -20 2480 -20 2441 0 2445 0 2480 20 19 12 43 36 55 55 20 35 20 39 20 2480 0 2441 0 2445 -20 2480 -12 19 -36 43 -55 55 -35 20 -40 20 -2460 22 -1334 0 -2440 -2 -2457 -7 z  m 3966 -435 c 371 -62 568 -251 600 -574 9 -85 0 -208 -20 -276 -58 -201 -243 -359 -584 -500 -292 -120 -409 -223 -392 -347 17 -123 161 -198 383 -198 145 0 336 50 460 120 30 16 56 30 59 30 3 0 5 -107 5 -238 0 -239 0 -239 -73 -260 -149 -43 -252 -56 -462 -56 -279 0 -420 28 -588 117 -102 54 -176 121 -231 210 -73 119 -104 248 -92 388 15 172 58 262 181 384 106 105 177 148 440 265 234 105 327 175 364 273 40 107 -29 214 -166 258 -95 30 -302 31 -415 1 -134 -36 -265 -96 -365 -168 -23 -16 -23 -16 -23 229 0 245 0 245 48 265 104 44 225 72 422 96 71 9 358 -3 449 -19 z  m -1759 -920 c 0 -915 0 -915 320 -915 320 0 320 0 320 -205 0 -205 0 -205 -895 -205 -895 0 -895 0 -895 205 0 205 0 205 320 205 320 0 320 0 320 915 0 915 0 915 255 915 255 0 255 0 255 -915 z "></path>
        </svg>
    );
};

export default TSIcon;
