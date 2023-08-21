import clsx from "clsx";

import type { FC, HTMLAttributes } from "react";

type VariantMessageType = "error" | "warn" | "info";

const messageType: Record<VariantMessageType, string> = {
    error: "text-inline-error",
    info: "text-inline-info",
    warn: "text-inline-warn",
};

export interface IInlineMessageProps
    extends Omit<HTMLAttributes<HTMLParagraphElement>, "children"> {
    variant: VariantMessageType;
    message?: string;
}

const InlineMessage: FC<IInlineMessageProps> = ({
    className,
    message,
    variant,
    ...rest
}) => {
    if (!message) return null;

    return (
        <p
            className={clsx(messageType[variant], "text-xs", className)}
            {...rest}>
            {message}
        </p>
    );
};

export default InlineMessage;
