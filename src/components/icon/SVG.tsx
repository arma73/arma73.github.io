import { FC, SVGProps, lazy, Suspense, LazyExoticComponent } from "react";
import { RingLoading } from "_components/loading";

export type SVGId =
    | "antd-logo"
    | "apollographql-logo"
    | "cloudinary-logo"
    | "css-logo"
    | "express-logo"
    | "github-logo"
    | "git-logo"
    | "graphql-logo"
    | "html-logo"
    | "intellij-idea-logo"
    | "java-logo"
    | "javascript-logo"
    | "jest-logo"
    | "jquery-logo"
    | "mongodb-logo"
    | "next-js-logo"
    | "node-js-logo"
    | "npm-logo"
    | "postcss-logo"
    | "postgresql-logo"
    | "react-logo"
    | "redux-logo"
    | "redux-saga-logo"
    | "sass-logo"
    | "sequelize-logo"
    | "stripe-logo"
    | "styled-components-logo"
    | "ts-node-logo"
    | "twilio-logo"
    | "typeorm-logo"
    | "typescript-logo"
    | "visual-studio-code-logo"
    | "webpack-logo"
    | "linux-logo"
    | "gitkraken-logo"
    | "gitlab-logo";

export type PathNames = "skills";

interface ISVGProps {
    "id": SVGId;
    "size"?: string;
    "path"?: PathNames;
    "onLoaded"?: FunctionOf;
}

export const SVG: FC<ISVGProps> = ({ id, size, path, onLoaded = () => {} }) => {
    const pathname = path ? `${path}/` : "";
    const IconComponent: LazyExoticComponent<
        FC<SVGProps<SVGSVGElement>>
    > = lazy(() => import(`_theme/icons/${pathname}${id}.svg`));

    return (
        <Suspense
            fallback={
                <RingLoading
                    color="#7d7d7d"
                    backColor="#fff"
                    size={size}
                    onLoaded={onLoaded}
                />
            }
        >
            <IconComponent width={size} height={size} />
        </Suspense>
    );
};
