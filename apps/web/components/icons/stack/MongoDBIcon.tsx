import type { FC } from "react";
import type { IconProps } from "../_types";

const MongoDBIcon: FC<IconProps> = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mongo DB"
            viewBox="0 0 10240 10240"
            {...props}>
            <g>
                <path d="M4920 10229c-498-19-982-107-1450-265-470-159-998-436-1389-728C980 8414 265 7227 61 5880c-64-426-70-968-15-1410 150-1197 738-2326 1633-3135 384-346 754-596 1206-815 293-142 497-221 805-311C4102 89 4494 26 4928 11c750-25 1438 95 2122 371 369 149 801 391 1106 619 1106 828 1818 2010 2023 3359 70 460 70 1060 0 1520-112 740-378 1433-784 2050-507 768-1193 1374-2010 1775-652 320-1338 498-2010 520-82 3-177 7-210 8-33 2-143 0-245-4zm350-2071c0-55 47-362 86-560l36-187 72-54c192-145 445-426 606-672 261-402 411-834 461-1328 15-155 7-552-15-717-43-315-212-824-385-1155-165-316-329-541-619-853-88-94-175-193-193-219-40-60-129-230-159-305-13-31-26-55-30-53-4 3-10 31-13 64-9 108-51 164-261 351-447 398-805 1017-966 1675-85 346-114 608-107 955 8 388 63 657 204 1004 200 495 606 1020 1035 1341 26 19 27 28 52 230 24 189 56 483 56 506 0 5 32 9 70 9h70v-32z" />
                <path d="M5260 7138c-33-58-67-161-103-309-22-93-22-100-21-824 1-867 22-1458 53-1513 25-44 65 747 101 1983 5 193 13 432 16 533 4 128 3 182-5 182-6 0-24-24-41-52z" />
            </g>
        </svg>
    );
};

export default MongoDBIcon;