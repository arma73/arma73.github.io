import { RoutePage } from "_settings/path.routes";

type KeysRoutePage = Exclude<keyof typeof RoutePage, "prototype">;

export const equalsPath = (pathname: string): string | null => {
    let expection: string | null = null;
    const keys = Object.keys(RoutePage) as KeysRoutePage[];
    const values: string[] = Object.values(RoutePage);
    const split = pathname.split("/");
    const baseRoute = split[1];

    if (baseRoute.length === 0) return RoutePage.MAIN;

    values.forEach((item, index) => {
        if (item.startsWith("/" + baseRoute)) {
            expection = RoutePage[keys[index]];
        }
    });

    return expection;
};
