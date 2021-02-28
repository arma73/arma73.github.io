import { FC, SVGProps } from "react";

declare global {
    declare module "*.svg" {
        const src: string;
        export default src;
    }

    declare module "_theme/icons/*.svg" {
        export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
        export default ReactComponent;
    }
}
