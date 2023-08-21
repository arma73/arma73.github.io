import { forwardRef } from "react";
import { inputAbleVariants } from "./textable.tail";
import { cn } from "@lib/utils";

import type {
    TextareaHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
} from "react";
import type { InputAbleVariantsProps } from "./textable.tail";

interface ITextareaProps
    extends Omit<InputAbleVariantsProps, "disabled">,
        TextareaHTMLAttributes<HTMLTextAreaElement> {}

type TextareaComponent = ForwardRefExoticComponent<
    ITextareaProps & RefAttributes<HTMLTextAreaElement>
>;

const Textarea: TextareaComponent = forwardRef(function TextareaRef(
    { className, vsize = "md", vtype = "primary", disabled, ...rest },
    externalRef
) {
    return (
        <textarea
            ref={externalRef}
            className={cn(
                inputAbleVariants({ vsize, vtype, disabled }),
                className
            )}
            {...rest}
        />
    );
});

export default Textarea;
