import type { FC } from "react";
import type { IconProps } from "../_types";

const NodeIcon: FC<IconProps> = props => {
    return (
        <svg
            viewBox="-16.5 0 289 289"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="NodeJS"
            {...props}>
            <path d="M127.999999 288.463771c-3.975155 0-7.6853-1.060043-11.130435-2.915115l-35.2463756-20.935818c-5.3002084-2.915114-2.650103-3.975156-1.0600426-4.505177 7.1552801-2.385091 8.4803317-2.915114 15.900623-7.15528.7950291-.53002 1.8550717-.265009 2.650103.265011l27.0310552 16.165632c1.060043.530021 2.385094.530021 3.180126 0l105.739129-61.21739c1.060043-.530023 1.590063-1.590063 1.590063-2.915115V83.0807467c0-1.3250538-.53002-2.3850941-1.590063-2.9151143L129.325053 19.2132506c-1.060043-.5300201-2.385094-.5300201-3.180126 0L20.4057954 80.1656324c-1.0600403.5300202-1.5900605 1.8550717-1.5900605 2.9151143V205.250519c0 1.060041.5300202 2.385092 1.5900605 2.915115l28.8861293 16.695652c15.6356117 7.950309 25.4409949-1.325052 25.4409949-10.600415V93.681159c0-1.5900605 1.3250515-3.1801232 3.1801232-3.1801232h13.5155288c1.5900627 0 3.1801232 1.3250515 3.1801232 3.1801232v120.579712c0 20.935818-11.3954436 33.126293-31.2712211 33.126293-6.0952375 0-10.8654235 0-24.3809523-6.625258l-27.8260867-15.90062C4.24016581 220.886129 0 213.46584 0 205.515528V83.3457557c0-7.9503092 4.24016581-15.3706005 11.1304347-19.3457551L116.869564 2.78260752c6.62526-3.71014336 15.635612-3.71014336 22.260872 0L244.869565 64.0000006C251.759834 67.9751552 256 75.3954465 256 83.3457557V205.515528c0 7.950312-4.240166 15.370601-11.130435 19.345758l-105.739129 61.21739c-3.445137 1.590063-7.420291 2.385095-11.130437 2.385095Zm32.596275-84.008283c-46.376813 0-55.917185-21.200829-55.917185-39.221533 0-1.590062 1.325052-3.180123 3.180123-3.180123h13.78054c1.590061 0 2.915112 1.06004 2.915112 2.650103 2.120083 14.045549 8.215323 20.935818 36.306419 20.935818 22.260871 0 31.801243-5.035197 31.801243-16.960663 0-6.890269-2.650103-11.925466-37.366461-15.370601-28.886127-2.915114-46.90683-9.275363-46.90683-32.331263 0-21.4658385 18.020703-34.1863359 48.231884-34.1863359 33.921324 0 50.616976 11.6604571 52.737059 37.1014499 0 .795031-.265011 1.590063-.795031 2.385094-.53002.53002-1.325052 1.06004-2.120083 1.06004h-13.780538c-1.325051 0-2.650103-1.06004-2.915114-2.385092-3.180123-14.575569-11.395446-19.345757-33.126293-19.345757-24.380954 0-27.296066 8.480332-27.296066 14.84058 0 7.685301 3.445134 10.070395 36.306418 14.310561 32.596273 4.240165 47.966873 10.335403 47.966873 33.126292-.265011 23.320912-19.345755 36.57143-53.00207 36.57143Z" />
        </svg>
    );
};

export default NodeIcon;