import { forwardRef } from "react";
import { inputAbleVariants } from "./textable.tail";
import { cn } from "@lib/utils";

import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
} from "react";
import type { InputAbleVariantsProps } from "./textable.tail";

interface IInputProps
    extends Omit<InputAbleVariantsProps, "disabled">,
        InputHTMLAttributes<HTMLInputElement> {
    vtype?: InputAbleVariantsProps["vtype"];
}
type InputComponent = ForwardRefExoticComponent<
    IInputProps & RefAttributes<HTMLInputElement>
>;

const Input: InputComponent = forwardRef(function InputRef(
    { className, vtype = "primary", disabled, id, vsize = "md", ...rest },
    externalRef
) {
    return (
        <input
            id={id}
            name={id}
            className={cn(
                inputAbleVariants({ vtype, vsize, disabled }),
                className
            )}
            ref={externalRef}
            {...rest}
        />
    );
});

export default Input;
