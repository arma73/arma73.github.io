import clsx from "clsx";

import type { FC, LabelHTMLAttributes } from "react";
import type { MakeRequiredProps } from "@lib/interfaces";

export interface ILabelProps
    extends MakeRequiredProps<
        Omit<LabelHTMLAttributes<HTMLLabelElement>, "children">,
        "htmlFor"
    > {
    required?: boolean;
    text: string;
}

const Label: FC<ILabelProps> = ({
    className,
    required = false,
    htmlFor,
    text,
    ...rest
}) => {
    return (
        <label
            aria-required={required}
            htmlFor={htmlFor}
            className={clsx(
                "block text-sm font-medium leading-6 text-typography-text-medium",
                className
            )}
            {...rest}>
            {text}
            {required ? <span className="ml-0.5">&#42;</span> : null}
        </label>
    );
};

export default Label;
