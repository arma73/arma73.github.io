import clsx from "clsx";
import { FC, Component } from "react";
import { CSSProperties } from "styled-components";
import "./Img.scss";

interface ImgProps {
    "component"?: typeof Component;
    "className"?: string;
    "src": string;
    "alt"?: string;
    "style"?: CSSProperties;
}

const Img: FC<ImgProps> = ({
    "component": ComponentIMG = "img",
    className,
    src,
    alt = "",
    ...restProps
}) => {
    if (ComponentIMG === "div") {
        return (
            <ComponentIMG
                className={clsx("bg", className)}
                {...restProps}
                style={{ "backgroundImage": `url(${src})` }}
            />
        );
    }

    return (
        <ComponentIMG
            className={clsx("img", className)}
            src={src}
            alt={alt}
            {...restProps}
        />
    );
};

export default Img;
